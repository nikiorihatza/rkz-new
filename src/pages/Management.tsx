import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Edit, Save, X } from 'lucide-react';
import { Button } from '../components/UI/Button';
import { TextField } from '../components/UI/TextField';
import { TextArea } from '../components/UI/TextArea';
import { useData } from '../context/DataContext';
import { News } from '../components/News/types';
import { Product } from '../components/Products/types';

export const Management: React.FC = () => {
    const { news, products, addNews, addProduct, deleteNews, deleteProduct, editNews, updateProductItem } = useData();
    const [activeTab, setActiveTab] = useState<'news' | 'products'>('news');
    const [editingId, setEditingId] = useState<number | string | null>(null);
    const [isAdding, setIsAdding] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        category: '',
        author: '',
        date: '',
        readTime: '',
        features: [] as string[],
        specifications: {} as Record<string, string>,
    });

    const handleInputChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async (e: React.FormEvent) => {
        if (activeTab === 'news') {
            if (editingId !== null) {
                await editNews(editingId, formData);  // Pass formData instead of the event
            } else if (isAdding) {
                addNews({ ...formData, id: Date.now().toString() } as News);
            }
        } else {
            if (editingId !== null) {
                updateProductItem(editingId as string, formData as Partial<Product>);
            } else if (isAdding) {
                addProduct({ ...formData, id: Date.now().toString() } as Product);
            }
        }
        handleCancel();
    };

    const handleEdit = (item: News | Product) => {
        setEditingId(item.id);
        setFormData({
            ...item,
            features: 'features' in item ? item.features : [],
            specifications: 'specifications' in item ? item.specifications : {},
        });
        setIsAdding(false);
    };

    const handleDelete = async (firestoreId: number | string, e: React.MouseEvent) => {
        console.log("Trying to delete data entry")

        try {
            await deleteNews(firestoreId);
        } catch (error) {
            console.error("Delete failed:", error);
        }
    };

    const handleCancel = () => {
        setEditingId(null);
        setIsAdding(false);
        setFormData({
            title: '',
            description: '',
            image: '',
            category: '',
            author: '',
            date: '',
            readTime: '',
            features: [],
            specifications: {},
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-dark-800 rounded-lg shadow-lg dark:shadow-none dark:border dark:border-primary-900/30 overflow-hidden"
                >
                    {/* Tabs */}
                    <div className="flex border-b border-gray-200 dark:border-dark-700">
                        <button
                            onClick={() => setActiveTab('news')}
                            className={`px-6 py-4 text-sm font-medium ${
                                activeTab === 'news'
                                    ? 'border-b-2 border-primary-500 text-primary-600 dark:text-primary-400'
                                    : 'text-gray-500 hover:text-gray-700 dark:text-secondary-400 dark:hover:text-secondary-300'
                            }`}
                        >
                            News
                        </button>
                        <button
                            onClick={() => setActiveTab('products')}
                            className={`px-6 py-4 text-sm font-medium ${
                                activeTab === 'products'
                                    ? 'border-b-2 border-primary-500 text-primary-600 dark:text-primary-400'
                                    : 'text-gray-500 hover:text-gray-700 dark:text-secondary-400 dark:hover:text-secondary-300'
                            }`}
                        >
                            Produkte
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {/* Add Button */}
                        {!isAdding && !editingId && (
                            <Button
                                onClick={() => setIsAdding(true)}
                                className="mb-6"
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                {activeTab === 'news' ? 'News hinzufügen' : 'Produkt hinzufügen'}
                            </Button>
                        )}

                        {/* Edit Form */}
                        {(isAdding || editingId !== null) && (
                            <div className="mb-6 p-6 bg-gray-50 dark:bg-dark-900/50 rounded-lg border border-gray-200 dark:border-dark-700">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-secondary-200 mb-4">
                                    {isAdding ? 'Neu erstellen' : 'Bearbeiten'}
                                </h3>
                                <div className="grid grid-cols-1 gap-6">
                                    <TextField
                                        label="Titel"
                                        value={formData.title}
                                        onChange={(e) => handleInputChange('title', e.target.value)}
                                    />
                                    <TextArea
                                        label="Beschreibung"
                                        value={formData.description}
                                        onChange={(e) => handleInputChange('description', e.target.value)}
                                    />
                                    <TextField
                                        label="Bild URL"
                                        value={formData.image}
                                        onChange={(e) => handleInputChange('image', e.target.value)}
                                    />
                                    <TextField
                                        label="Kategorie"
                                        value={formData.category}
                                        onChange={(e) => handleInputChange('category', e.target.value)}
                                    />
                                    {activeTab === 'news' && (
                                        <>
                                            <TextField
                                                label="Autor"
                                                value={formData.author}
                                                onChange={(e) => handleInputChange('author', e.target.value)}
                                            />
                                            <TextField
                                                label="Datum"
                                                value={formData.date}
                                                onChange={(e) => handleInputChange('date', e.target.value)}
                                            />
                                            <TextField
                                                label="Lesezeit"
                                                value={formData.readTime}
                                                onChange={(e) => handleInputChange('readTime', e.target.value)}
                                            />
                                        </>
                                    )}
                                </div>
                                <div className="mt-6 flex gap-4">
                                    <Button onClick={handleSave}>
                                        <Save className="w-4 h-4 mr-2" />
                                        Speichern
                                    </Button>
                                    <Button variant="secondary" onClick={handleCancel}>
                                        <X className="w-4 h-4 mr-2" />
                                        Abbrechen
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* List */}
                        <div className="space-y-4">
                            {(activeTab === 'news' ? news : products).map((item) => (
                                <motion.div
                                    key={item.id}  // Use firestoreId for unique key prop
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center justify-between p-4 bg-white dark:bg-dark-800 rounded-lg border border-gray-200 dark:border-dark-700 hover:shadow-md transition-shadow duration-200"
                                >
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={item.imageUrl || item.image}
                                            alt={item.title}
                                            className="w-12 h-12 rounded-lg object-cover"
                                        />
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900 dark:text-secondary-200">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-secondary-400">
                                                {item.category}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="p-2 text-gray-400 hover:text-primary-500 dark:text-secondary-400 dark:hover:text-primary-400"
                                        >
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}  // Use firestoreId here
                                            className="p-2 text-gray-400 hover:text-accent-500 dark:text-secondary-400 dark:hover:text-accent-400"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};