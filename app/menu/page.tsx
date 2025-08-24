"use client";


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Star, Plus, Minus, ShoppingCart, Filter } from "lucide-react";

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    rating: number;
    image: string;
    category: string;
    tags: string[];
    isPopular?: boolean;
    isNew?: boolean;
}

export default function Page() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [cart, setCart] = useState<{ [key: number]: number }>({});
    const [showCart, setShowCart] = useState(false);

    const categories = [
        { id: "all", name: "Tất cả", count: 24 },
        { id: "coffee", name: "Cà phê", count: 12 },
        { id: "tea", name: "Trà & Matcha", count: 6 },
        { id: "pastry", name: "Bánh ngọt", count: 8 },
        { id: "food", name: "Đồ ăn nhẹ", count: 6 }
    ];

    const menuItems: MenuItem[] = [
        {
            id: 1,
            name: "Cappuccino Đặc Biệt",
            description: "Espresso thơm ngon với sữa tươi và bọt sữa mịn màng, rắc bột cacao",
            price: 55000,
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NTU4MzM5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "coffee",
            tags: ["Hot", "Bestseller"],
            isPopular: true
        },
        {
            id: 2,
            name: "Espresso Ý",
            description: "Cà phê espresso đậm đà theo phong cách Ý truyền thống",
            price: 45000,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1650100458608-824a54559caa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGVzcHJlc3NvfGVufDF8fHx8MTc1NTk0NDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "coffee",
            tags: ["Hot", "Strong"]
        },
        {
            id: 3,
            name: "Cold Brew",
            description: "Cà phê pha lạnh 12 tiếng, vị ngọt tự nhiên, không đắng",
            price: 65000,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1644764399224-f7d18b1e8d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VkJTIwY29mZmVlJTIwY29sZCUyMGJyZXd8ZW58MXx8fHwxNzU1ODkwMDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "coffee",
            tags: ["Cold", "Premium"]
        },
        {
            id: 4,
            name: "Matcha Latte",
            description: "Bột matcha Nhật Bản cao cấp pha với sữa tươi, ngọt dịu",
            price: 70000,
            originalPrice: 80000,
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1708572727896-117b5ea25a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHRlYSUyMG1hdGNoYSUyMGxhdHRlfGVufDF8fHx8MTc1NTk2MjEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "tea",
            tags: ["Hot/Cold", "Healthy"],
            isNew: true
        },
        {
            id: 5,
            name: "Croissant Bơ Tỏi",
            description: "Bánh croissant giòn rụm với bơ tỏi thơm lừng, nướng tại chỗ",
            price: 35000,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1733754348873-feeb45df3bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBjcm9pc3NhbnQlMjBiYWtlcnl8ZW58MXx8fHwxNzU1OTA5ODUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "pastry",
            tags: ["Fresh", "Crispy"]
        },
        {
            id: 6,
            name: "Bánh Chocolate",
            description: "Bánh chocolate đậm đà với ganache chocolate Bỉ",
            price: 85000,
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1644158776192-2d24ce35da1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NTU5NTQ2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "pastry",
            tags: ["Premium", "Rich"],
            isPopular: true
        },
        {
            id: 7,
            name: "Avocado Toast",
            description: "Bánh mì nướng với bơ tươi, cà chua cherry và gia vị đặc biệt",
            price: 75000,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1676471970358-1cff04452e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzU1OTU5NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "food",
            tags: ["Healthy", "Vegetarian"]
        },
        {
            id: 8,
            name: "Sandwich Gà Nướng",
            description: "Bánh mì sandwich với gà nướng thơm ngon, rau xanh tươi",
            price: 95000,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1741414203946-9d8e45350f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kd2ljaCUyMGx1bmNoJTIwY2FmZXxlbnwxfHx8fDE3NTU5NjIxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "food",
            tags: ["Protein", "Filling"]
        },
        {
            id: 9,
            name: "Muffin Blueberry",
            description: "Bánh muffin mềm mịn với quả việt quất tươi và hạt óc chó",
            price: 45000,
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1678120128033-45e4a856d574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWZmaW4lMjBibHVlYmVycnklMjBiYWtlcnl8ZW58MXx8fHwxNzU1OTE1Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "pastry",
            tags: ["Sweet", "Fruity"]
        }
    ];

    const filteredItems = selectedCategory === "all"
        ? menuItems
        : menuItems.filter(item => item.category === selectedCategory);

    const addToCart = (itemId: number) => {
        setCart(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = (itemId: number) => {
        setCart(prev => {
            const newCart = { ...prev };
            if (newCart[itemId] > 1) {
                newCart[itemId]--;
            } else {
                delete newCart[itemId];
            }
            return newCart;
        });
    };

    const getTotalItems = () => {
        return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
    };

    const getTotalPrice = () => {
        return Object.entries(cart).reduce((sum, [itemId, quantity]) => {
            const item = menuItems.find(item => item.id === parseInt(itemId));
            return sum + (item?.price || 0) * quantity;
        }, 0);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-800 to-yellow-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mt-20">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            Thực Đơn <span className="text-yellow-300">Cafe Xanh</span>
                        </h1>
                        <p className="text-xl text-green-100 max-w-2xl mx-auto">
                            Khám phá bộ sưu tập đồ uống và món ăn tuyệt vời được chế biến từ những nguyên liệu tốt nhất
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Category Filter */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-green-800">Danh mục món ăn</h2>
                                <Button
                                    variant="outline"
                                    className="lg:hidden border-green-600 text-green-600"
                                    onClick={() => setShowCart(true)}
                                >
                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                    Giỏ hàng ({getTotalItems()})
                                </Button>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {categories.map((category) => (
                                    <Button
                                        key={category.id}
                                        variant={selectedCategory === category.id ? "default" : "outline"}
                                        className={selectedCategory === category.id
                                            ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                                            : "border-green-600 text-green-600 hover:bg-green-50"
                                        }
                                        onClick={() => setSelectedCategory(category.id)}
                                    >
                                        {category.name} ({category.count})
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Menu Items Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {filteredItems.map((item) => (
                                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-yellow-200">
                                    <div className="flex">
                                        <div className="relative w-32 h-32 flex-shrink-0">
                                            <ImageWithFallback
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                            {item.isNew && (
                                                <Badge className="absolute top-2 left-2 bg-green-600">Mới</Badge>
                                            )}
                                            {item.isPopular && (
                                                <Badge className="absolute top-2 right-2 bg-yellow-500">Phổ biến</Badge>
                                            )}
                                        </div>

                                        <CardContent className="flex-1 p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-bold text-green-800">{item.name}</h3>
                                                <div className="flex items-center space-x-1">
                                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                    <span className="text-sm font-semibold">{item.rating}</span>
                                                </div>
                                            </div>

                                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

                                            <div className="flex flex-wrap gap-1 mb-3">
                                                {item.tags.map((tag) => (
                                                    <Badge key={tag} variant="secondary" className="text-xs">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <span className="font-bold text-yellow-600">
                                                        {item.price.toLocaleString()}đ
                                                    </span>
                                                    {item.originalPrice && (
                                                        <span className="text-sm text-gray-500 line-through">
                                                            {item.originalPrice.toLocaleString()}đ
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex items-center space-x-2">
                                                    {cart[item.id] ? (
                                                        <div className="flex items-center space-x-2">
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                className="w-8 h-8 p-0"
                                                                onClick={() => removeFromCart(item.id)}
                                                            >
                                                                <Minus className="w-4 h-4" />
                                                            </Button>
                                                            <span className="w-8 text-center">{cart[item.id]}</span>
                                                            <Button
                                                                size="sm"
                                                                className="w-8 h-8 p-0 bg-yellow-500 hover:bg-yellow-600"
                                                                onClick={() => addToCart(item.id)}
                                                            >
                                                                <Plus className="w-4 h-4" />
                                                            </Button>
                                                        </div>
                                                    ) : (
                                                        <Button
                                                            size="sm"
                                                            className="bg-yellow-500 hover:bg-yellow-600 text-white"
                                                            onClick={() => addToCart(item.id)}
                                                        >
                                                            <Plus className="w-4 h-4 mr-1" />
                                                            Thêm
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Cart Sidebar */}
                    <div className="lg:w-80">
                        <Card className="sticky top-24 border-yellow-200">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-green-800 mb-4 flex items-center">
                                    <ShoppingCart className="w-5 h-5 mr-2" />
                                    Giỏ hàng ({getTotalItems()})
                                </h3>

                                {Object.keys(cart).length === 0 ? (
                                    <p className="text-gray-500 text-center py-8">Giỏ hàng trống</p>
                                ) : (
                                    <div className="space-y-4">
                                        {Object.entries(cart).map(([itemId, quantity]) => {
                                            const item = menuItems.find(item => item.id === parseInt(itemId));
                                            if (!item) return null;

                                            return (
                                                <div key={itemId} className="flex items-center justify-between py-2 border-b border-yellow-100">
                                                    <div className="flex-1">
                                                        <h4 className="font-medium text-sm">{item.name}</h4>
                                                        <p className="text-yellow-600 text-sm">{item.price.toLocaleString()}đ</p>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            className="w-6 h-6 p-0"
                                                            onClick={() => removeFromCart(item.id)}
                                                        >
                                                            <Minus className="w-3 h-3" />
                                                        </Button>
                                                        <span className="w-6 text-center text-sm">{quantity}</span>
                                                        <Button
                                                            size="sm"
                                                            className="w-6 h-6 p-0 bg-yellow-500 hover:bg-yellow-600"
                                                            onClick={() => addToCart(item.id)}
                                                        >
                                                            <Plus className="w-3 h-3" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            );
                                        })}

                                        <div className="pt-4 border-t border-yellow-200">
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="font-bold">Tổng cộng:</span>
                                                <span className="font-bold text-green-800">
                                                    {getTotalPrice().toLocaleString()}đ
                                                </span>
                                            </div>
                                            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                                                Đặt hàng ngay
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}