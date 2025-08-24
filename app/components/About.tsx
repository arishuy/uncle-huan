import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Leaf, Heart, Coffee, Users } from "lucide-react";

export function About() {
    const features = [
        {
            icon: <Coffee className="w-8 h-8 text-yellow-600" />,
            title: "Cà phê chất lượng cao",
            description: "Hạt cà phê được chọn lọc kỹ càng từ những vùng đất tốt nhất"
        },
        {
            icon: <Leaf className="w-8 h-8 text-green-600" />,
            title: "Không gian xanh",
            description: "Thiết kế thân thiện với môi trường, nhiều cây xanh tạo cảm giác thoải mái"
        },
        {
            icon: <Heart className="w-8 h-8 text-red-500" />,
            title: "Phục vụ tận tâm",
            description: "Đội ngũ nhân viên nhiệt tình, chu đáo và chuyên nghiệp"
        },
        {
            icon: <Users className="w-8 h-8 text-blue-600" />,
            title: "Cộng đồng ấm áp",
            description: "Nơi gặp gỡ, làm việc và thư giãn lý tưởng cho mọi người"
        }
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-green-50 to-yellow-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                            Về <span className="text-yellow-600">Uncle Huan Coffee</span>
                        </h2>

                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Được thành lập từ năm 2014, Cafe Xanh là điểm đến yêu thích của những người đam mê cà phê.
                            Chúng tôi cam kết mang đến những ly cà phê tuyệt vời nhất trong không gian xanh mát,
                            thân thiện với môi trường.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-green-800 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-yellow-200 to-green-200 rounded-3xl p-8">
                            <ImageWithFallback
                                src="https://res.cloudinary.com/dizm6unn4/image/upload/v1733105793/Huancafe/vjrvb9xgi8grq5dtuvf9.jpg"
                                alt="Coffee beans"
                                className="w-full h-96 object-cover rounded-2xl shadow-xl"
                            />
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-yellow-200">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-800">4.8⭐</div>
                                <div className="text-sm text-gray-600">Đánh giá trung bình</div>
                            </div>
                        </div>

                        <div className="absolute -top-6 -right-6 bg-yellow-400 rounded-2xl p-6 shadow-xl">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">10+</div>
                                <div className="text-sm text-white/90">Năm kinh nghiệm</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 