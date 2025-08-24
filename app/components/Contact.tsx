import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6 text-yellow-600" />,
            title: "Địa chỉ",
            content: "675 Đ. Hai Bà Trưng, Phường Minh An, Hội An, Quảng Nam"
        },
        {
            icon: <Phone className="w-6 h-6 text-yellow-600" />,
            title: "Điện thoại",
            content: "0905 417 794"
        },
        {
            icon: <Mail className="w-6 h-6 text-yellow-600" />,
            title: "Email",
            content: "unclehuancoffee@gmail.com"
        },
        {
            icon: <Clock className="w-6 h-6 text-yellow-600" />,
            title: "Giờ mở cửa",
            content: "7:00 - 23:30 (Hàng ngày)"
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-yellow-50 to-green-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                        Liên Hệ <span className="text-yellow-600">Với Chúng Tôi</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Hãy ghé thăm chúng tôi hoặc đặt bàn trước để có trải nghiệm tuyệt vời nhất
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-green-800 mb-8">Thông tin liên hệ</h3>

                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <Card key={index} className="border-yellow-200 hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-green-800 mb-1">
                                                    {info.title}
                                                </h4>
                                                <p className="text-gray-600">{info.content}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Map placeholder */}
                        <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
                            <div className="text-center text-gray-500">
                                <MapPin className="w-12 h-12 mx-auto mb-2" />
                                <p>Bản đồ sẽ được hiển thị tại đây</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h3 className="text-2xl font-bold text-green-800 mb-8">Đặt bàn trước</h3>

                        <Card className="border-yellow-200">
                            <CardContent className="p-8">
                                <form className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-green-800 mb-2">
                                                Họ và tên *
                                            </label>
                                            <Input
                                                placeholder="Nhập họ và tên"
                                                className="border-yellow-200 focus:border-yellow-400"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-green-800 mb-2">
                                                Số điện thoại *
                                            </label>
                                            <Input
                                                placeholder="Nhập số điện thoại"
                                                className="border-yellow-200 focus:border-yellow-400"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-green-800 mb-2">
                                                Ngày đến
                                            </label>
                                            <Input
                                                type="date"
                                                className="border-yellow-200 focus:border-yellow-400"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-green-800 mb-2">
                                                Giờ đến
                                            </label>
                                            <Input
                                                type="time"
                                                className="border-yellow-200 focus:border-yellow-400"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-green-800 mb-2">
                                            Số người
                                        </label>
                                        <Input
                                            type="number"
                                            placeholder="Nhập số người"
                                            min="1"
                                            className="border-yellow-200 focus:border-yellow-400"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-green-800 mb-2">
                                            Ghi chú
                                        </label>
                                        <Textarea
                                            placeholder="Yêu cầu đặc biệt (nếu có)"
                                            rows={4}
                                            className="border-yellow-200 focus:border-yellow-400"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3"
                                        size="lg"
                                    >
                                        Đặt bàn ngay
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}