import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { News } from '../components/News/types';
import { Product } from '../components/Products/types';

interface DataContextType {
    news: News[];
    products: Product[];
    isLoading: boolean;
    error: string | null;
    updateNews: (news: News[]) => void;
    updateProducts: (products: Product[]) => void;
    addNews: (news: Omit<News, "id">) => Promise<string>;
    addProduct: (product: Omit<Product, "id">) => Promise<string>;
    deleteNews: (id: string) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;
    updateNewsItem: (id: string, news: Partial<News>) => Promise<void>;
    updateProductItem: (id: string, product: Partial<Product>) => Promise<void>;
    fetchData: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [news, setNews] = useState<News[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            const newsSnapshot = await getDocs(collection(db, "news"));
            const newsData = newsSnapshot.docs.map(d => {
                const data = d.data();
                return {
                    id: data.id ? Number(data.id) : d.id,
                    ...data
                } as News;
            });
            setNews(newsData);
        } catch (err) {
            const message = err instanceof Error ? err.message : "Failed to fetch data";
            setError(message);
            throw new Error(message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Add news with proper typing and error handling
    const addNews = async (newsItem: Omit<News, "id">): Promise<string> => {
        try {
            const docRef = await addDoc(collection(db, "news"), newsItem);
            setNews(prev => [...prev, { id: docRef.id, ...newsItem }]);
            return docRef.id;
        } catch (err) {
            const message = err instanceof Error ? err.message : "Failed to add news";
            setError(message);
            throw new Error(message);
        }
    };

    // Robust delete function with type checking
    const deleteNews = async (id: string | number) => {
        try {
            const docRef = doc(db, "news", id);
            await deleteDoc(docRef);
            setNews(prev => prev.filter(item => item.id !== id));
        } catch (err) {
            const message = `Failed to delete news (ID: ${id}): ${err instanceof Error ? err.message : err}`;
            setError(message);
            console.error(message);
            throw new Error(message);
        }
    };

    // Edit News
    const editNews = async (id: string | number, updatedData: Partial<News>) => {
        try {
            const docRef = doc(db, "news", String(id));
            await updateDoc(docRef, updatedData);
            alert("News updated successfully!");
        } catch (error) {
            const message = `Failed to update news (ID: ${id}): ${error instanceof Error ? error.message : error}`;
            setError(message);
            console.error(message);
            throw new Error(message);
        }
    };

    return (
        <DataContext.Provider
            value={{
                news,
                products,
                isLoading,
                error,
                updateNews: setNews,
                updateProducts: setProducts,
                addNews,
                addProduct: async (product) => {
                    const docRef = await addDoc(collection(db, "products"), product);
                    setProducts(prev => [...prev, { id: docRef.id, ...product }]);
                    return docRef.id;
                },
                deleteNews,
                deleteProduct: async (id) => {
                    await deleteDoc(doc(db, "products", id));
                    setProducts(prev => prev.filter(item => item.id !== id));
                },
                updateNewsItem: async (id, updates) => {
                    await updateDoc(doc(db, "news", id), updates);
                    setNews(prev => prev.map(item =>
                        item.id === id ? { ...item, ...updates } : item
                    ));
                },
                updateProductItem: async (id, updates) => {
                    await updateDoc(doc(db, "products", id), updates);
                    setProducts(prev => prev.map(item =>
                        item.id === id ? { ...item, ...updates } : item
                    ));
                },
                fetchData
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};