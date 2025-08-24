import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Link from "next/link";

export function Hero() {
    return (
        <section id="home" className="min-h-screen relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <ImageWithFallback
                    src="https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/kqkpwx7f4bqhq7en7uht.jpg"
                    alt="Coffee shop interior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-yellow-900/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
                <div className="max-w-2xl text-white">
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-yellow-200">4.8/5 - Hơn 1000 đánh giá</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Uncle Huan <span className="text-yellow-400">Coffee</span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                        Nơi khởi đầu ngày mới với hương vị cà phê tuyệt vời và không gian xanh mát trong lành
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            size="lg"
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg"
                        >
                            <Link href="/menu">
                                Khám phá thực đơn
                            </Link>
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-green-900 hover:bg-white hover:text-green-800 px-8 py-4 text-lg"
                        >
                            Đặt bàn ngay
                        </Button>
                    </div>

                    <div className="mt-12 grid grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-400">10+</div>
                            <div className="text-gray-300">Năm kinh nghiệm</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-400">50k+</div>
                            <div className="text-gray-300">Khách hàng hài lòng</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-yellow-400">100%</div>
                            <div className="text-gray-300">Cà phê tự nhiên</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}