"use client";

import { Button } from "./ui/button";
import { Menu, Coffee } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-yellow-200">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Coffee className="h-8 w-8 text-yellow-600" />
                        <span className="text-xl font-bold text-green-800">Uncle Huan Coffee</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 font-medium">
                        <Link href="/" className="text-green-700 hover:text-yellow-600 transition-colors">
                            Trang chủ
                        </Link>
                        <a href="#about" className="text-green-700 hover:text-yellow-600 transition-colors">
                            Về chúng tôi
                        </a>
                        <Link href="/menu" className="text-green-700 hover:text-yellow-600 transition-colors">
                            Thực đơn
                        </Link>
                        <a href="#contact" className="text-green-700 hover:text-yellow-600 transition-colors">
                            Liên hệ
                        </a>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                            Đặt bàn ngay
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <Menu className="h-6 w-6 text-green-800" />
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 border-t border-yellow-200 pt-4">
                        <div className="flex flex-col space-y-4">
                            <Link href="" className="text-green-700 hover:text-yellow-600 transition-colors">
                                Trang chủ
                            </Link>
                            <a href="#about" className="text-green-700 hover:text-yellow-600 transition-colors">
                                Về chúng tôi
                            </a>
                            <a href="#menu" className="text-green-700 hover:text-yellow-600 transition-colors">
                                Thực đơn
                            </a>
                            <a href="#contact" className="text-green-700 hover:text-yellow-600 transition-colors">
                                Liên hệ
                            </a>
                            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white w-full">
                                Đặt bàn ngay
                            </Button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}