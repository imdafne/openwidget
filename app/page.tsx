"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HereinLandingPage() {
  return (
    <motion.div
      className="h-screen gradient-bg overflow-hidden flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <main className="flex-1 flex items-center justify-center px-8 py-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and slogan */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-normal text-white tracking-tight drop-shadow-lg font-fangzheng">
                此间 Herein
              </h1>
              <h2 className="text-2xl md:text-3xl text-white/90 font-normal font-fangzheng">布置一个属于你的角落</h2>
              <p className="text-lg md:text-xl text-white/70 font-normal font-fangzheng max-w-md mx-auto lg:mx-0">
                个性化小组件，装点你的数字生活
              </p>
            </div>
          </motion.div>

          {/* Right side - Phone mockup and download button */}
          <motion.div
            className="flex flex-col items-center space-y-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* iPhone mockup with provided screen image */}
            <div className="relative">
              <div className="w-72 h-[580px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  <Image src="/images/phone-screen.png" alt="此间应用界面" fill className="object-cover" />
                </div>
              </div>
            </div>

            {/* Download button */}
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-normal rounded-xl font-fangzheng shadow-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              App Store 下载
            </Button>
          </motion.div>
        </div>
      </main>

      <footer className="py-6 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="text-xs text-gray-500 space-y-2 font-fangzheng">
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
              <span>© 2025 Herein</span>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-gray-400 transition-colors">
                隐私政策
              </a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-gray-400 transition-colors">
                用户协议
              </a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-gray-400 transition-colors">
                联系我们
              </a>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
              <span>ICP备案号: [placeholder]</span>
              <span className="hidden md:inline">|</span>
              <span>support@herein.app</span>
            </div>
          </div>
        </motion.div>
      </footer>
    </motion.div>
  )
}
