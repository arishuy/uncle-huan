import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Plus } from "lucide-react";
import Link from "next/link";

export function Menu() {
    const menuItems = [
        {
            id: 1,
            name: "Cappuccino Đặc Biệt",
            description: "Espresso thơm ngon với sữa tươi và bọt sữa mịn màng",
            price: "55.000đ",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NTU4MzM5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "Coffee"
        },
        {
            id: 2,
            name: "Croissant Bơ Tỏi",
            description: "Bánh croissant giòn rụm với bơ tỏi thơm lừng",
            price: "35.000đ",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1733754348873-feeb45df3bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBjcm9pc3NhbnQlMjBiYWtlcnl8ZW58MXx8fHwxNzU1OTA5ODUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "Pastry"
        },
        {
            id: 3,
            name: "Espresso Ý",
            description: "Cà phê espresso đậm đà theo phong cách Ý truyền thống",
            price: "45.000đ",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1650100458608-824a54559caa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGVzcHJlc3NvfGVufDF8fHx8MTc1NTk0NDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "Coffee"
        }
    ];

    return (
        <section id="menu" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                        Thực Đơn <span className="text-yellow-600">Đặc Biệt</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Khám phá những món đồ uống và bánh ngọt được yêu thích nhất tại Cafe Xanh
                    </p>
                </div>

                {/* Menu Categories */}
                <div className="flex justify-center mb-12">
                    <div className="flex bg-gray-100 rounded-full p-1">
                        <button className="px-6 py-2 rounded-full bg-yellow-500 text-white transition-all">
                            Tất cả
                        </button>
                        <button className="px-6 py-2 rounded-full text-gray-600 hover:text-green-800 transition-all">
                            Cà phê
                        </button>
                        <button className="px-6 py-2 rounded-full text-gray-600 hover:text-green-800 transition-all">
                            Bánh ngọt
                        </button>
                        <button className="px-6 py-2 rounded-full text-gray-600 hover:text-green-800 transition-all">
                            Đồ uống khác
                        </button>
                    </div>
                </div>

                {/* Menu Items */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {menuItems.map((item) => (
                        <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="relative overflow-hidden">
                                <ImageWithFallback
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-4 right-4">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm font-semibold">{item.rating}</span>
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-green-800 mb-2">{item.name}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>

                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-yellow-600">{item.price}</span>
                                    <Button
                                        size="sm"
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white"
                                    >
                                        <Plus className="w-4 h-4 mr-1" />
                                        Thêm
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    >
                        <Link href="/menu" className="flex items-center">
                            Xem thực đơn đầy đủ
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}