import { Coffee, Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-green-800 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <Coffee className="h-8 w-8 text-yellow-400" />
                            <span className="text-xl font-bold">Uncle Huan Coffee</span>
                        </div>
                        <p className="text-green-200 mb-6 leading-relaxed">
                            Nơi khởi đầu ngày mới với hương vị cà phê tuyệt vời và không gian xanh mát trong lành.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/unclehuancoffee" target="_blank" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/unclehuan.coffee" target="_blank" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-yellow-400">Liên kết nhanh</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-green-200 hover:text-yellow-400 transition-colors">Trang chủ</Link></li>
                            <li><Link href="#about" className="text-green-200 hover:text-yellow-400 transition-colors">Về chúng tôi</Link></li>
                            <li><Link href="/menu" className="text-green-200 hover:text-yellow-400 transition-colors">Thực đơn</Link></li>
                            <li><Link href="#contact" className="text-green-200 hover:text-yellow-400 transition-colors">Liên hệ</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-yellow-400">Dịch vụ</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-green-200 hover:text-yellow-400 transition-colors">Đặt bàn trước</a></li>
                            <li><a href="#" className="text-green-200 hover:text-yellow-400 transition-colors">Giao hàng tận nơi</a></li>
                            <li><a href="#" className="text-green-200 hover:text-yellow-400 transition-colors">Tổ chức sự kiện</a></li>
                            <li><a href="#" className="text-green-200 hover:text-yellow-400 transition-colors">Cà phê mang về</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-yellow-400">Thông tin liên hệ</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                                <span className="text-green-200">675 Đ. Hai Bà Trưng, Phường Minh An, Hội An, Quảng Nam</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                                <span className="text-green-200">0905 417 794</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                                <span className="text-green-200">unclehuancoffee@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-green-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-green-200 mb-4 md:mb-0">
                            © 2025 Uncle Huan Coffee. Tất cả quyền được bảo lưu.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-green-200 hover:text-yellow-400 transition-colors">
                                Chính sách bảo mật
                            </a>
                            <a href="#" className="text-green-200 hover:text-yellow-400 transition-colors">
                                Điều khoản sử dụng
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}