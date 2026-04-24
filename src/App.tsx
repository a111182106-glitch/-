import { motion, useScroll, useTransform } from 'motion/react';
import { 
  TrendingUp, 
  Briefcase, 
  Languages, 
  Mail, 
  LineChart, 
  ArrowRight,
  Activity,
  GraduationCap,
  ChevronDown
} from 'lucide-react';
import React from 'react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-500/20 selection:text-emerald-900">
      
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-300/20 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-300/20 blur-[100px]" />
        {/* Abstract dot grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-200/50 bg-white/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-display font-bold text-lg tracking-tight text-slate-900">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <span>K.J. Lee</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-emerald-600 transition-colors">關於我</a>
            <a href="#resume" className="hover:text-emerald-600 transition-colors">學歷與經歷</a>
            <a href="#skills" className="hover:text-emerald-600 transition-colors">專業能力</a>
          </div>
          <a href="mailto:a111182106@nkust.edu.tw" className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm">
            聯繫我
          </a>
        </div>
      </nav>

      <main className="relative z-10 pt-24 pb-20">
        {/* Hero Section */}
        <section id="about" className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:pb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center flex-col-reverse flex relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start gap-6 order-2 md:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                全職操盤手 | 高科巴菲特
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                你好，我是 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  李冠頡
                </span>
                <span className="inline-block ml-3 text-3xl md:text-5xl text-slate-400 font-medium">
                  (廷廷)
                </span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg mt-2">
                對於股票操作有濃厚興趣，目前主要靠操盤維生。具有高度的數字敏銳度，善於市場趨勢判斷與風險控管，目標是在金融市場穩健獲利，同學私下稱為「高科巴菲特」。
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <a href="#resume" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30">
                  查看完整履歷
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="mailto:a111182106@nkust.edu.tw" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 transition-colors shadow-sm">
                  <Mail className="w-4 h-4" />
                  聯絡方式
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 md:order-2 flex justify-center md:justify-end"
            >
              {/* Profile Photo Wrapper */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full blur-2xl opacity-20 transform translate-x-4 translate-y-4"></div>
                <div className="absolute inset-0 rounded-full border-2 border-emerald-500 border-dashed animate-[spin_20s_linear_infinite] opacity-30 scale-105"></div>
                
                {/* Main Photo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 rounded-full border-4 border-white shadow-xl z-10 overflow-hidden group">
                  <div className="text-center px-6 text-slate-500 absolute inset-0 flex flex-col items-center justify-center z-0">
                    <span className="text-sm font-bold text-slate-700 mb-1">等待更換為個人照</span>
                    <span className="text-xs">請將照片拖曳至左側 <b>public</b> 目錄</span>
                    <span className="text-xs mt-1">並命名為 <code className="bg-slate-200 px-1 rounded text-emerald-700 font-semibold">profile.jpg</code></span>
                  </div>
                  <img 
                    src="/profile.jpg" 
                    alt="李冠頡的個人照片" 
                    className="absolute inset-0 w-full h-full object-cover object-top z-10 transition-opacity duration-300"
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0';
                    }}
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                  />
                </div>

                {/* Floating Stat Card */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 z-20 bg-white/90 backdrop-blur-xl border border-slate-100 p-4 rounded-2xl flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <LineChart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="pr-2">
                    <div className="text-xs text-slate-500 font-medium tracking-wide">職業身份</div>
                    <div className="text-lg font-display font-bold text-slate-900 leading-tight">全職操盤</div>
                  </div>
                </motion.div>

                {/* Decorative indicator */}
                <div className="absolute top-8 -right-4 z-20 bg-white p-3 rounded-full shadow-lg border border-slate-100">
                  <TrendingUp className="w-6 h-6 text-emerald-500" />
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-16 md:mt-24 opacity-50">
             <ChevronDown className="w-6 h-6 animate-bounce text-slate-400" />
          </div>
        </section>

        {/* Resume Section (Education & Experience) */}
        <section id="resume" className="max-w-4xl mx-auto px-6 py-24 bg-white/50 backdrop-blur-sm border-y border-slate-200">
          
          {/* Education Sub-section */}
          <div className="mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                 <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900">學歷背景</h2>
            </motion.div>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <div className="md:w-1/4 shrink-0">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-2">2022 ~ 迄今</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">國立高雄科技大學</h3>
                  <p className="text-slate-600 font-medium">National Kaohsiung University of Science and Technology</p>
                  <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                    在校期間除主修課程外，大量鑽研財金、證券交易等市場知識，透過實戰交易累積豐富的實務經驗，為未來的金融職涯打下堅實基礎。
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Experience Sub-section */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-12"
            >
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900">工作經歷</h2>
            </motion.div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 md:before:ml-[8.5rem] before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-200">
              
              {/* Experience 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12 pl-12 md:pl-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-[8.5rem] top-1 flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-emerald-500 shadow-sm shrink-0 transform -translate-x-1/2"></div>
                
                {/* Date */}
                <div className="md:w-[7rem] shrink-0 pt-1.5 md:text-right hidden md:block">
                  <span className="text-emerald-700 font-semibold text-sm">2019 ~ 2025</span>
                </div>

                {/* Content Card */}
                <div className="flex-1 p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="md:hidden mb-3">
                    <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-semibold rounded-full">2019 ~ 2025</span>
                  </div>
                  <div className="flex flex-col gap-1 mb-4">
                    <h3 className="text-xl font-bold text-slate-900">資深融資專員兼逾期款項處理專員</h3>
                    <span className="text-emerald-600 font-medium">蘋果森林有限公司</span>
                  </div>
                  <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-disc list-inside">
                    <li>負責客戶融資需求評估、風險審核及方案規劃。</li>
                    <li>處理複雜的逾期款項談判，制定雙贏的還款計畫。</li>
                    <li>具備高抗壓性與解決問題的能力，這段經驗也大幅提升了對於數字與風險的敏銳度，成為後續操盤的優勢。</li>
                  </ul>
                </div>
              </motion.div>

              {/* Experience 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12 pl-12 md:pl-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-[8.5rem] top-1 flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-slate-300 shadow-sm shrink-0 transform -translate-x-1/2"></div>

                {/* Date */}
                <div className="md:w-[7rem] shrink-0 pt-1.5 md:text-right hidden md:block">
                  <span className="text-slate-500 font-semibold text-sm">前期經歷</span>
                </div>

                {/* Content Card */}
                <div className="flex-1 p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="md:hidden mb-3">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-semibold rounded-full">前期經歷</span>
                  </div>
                  <div className="flex flex-col gap-1 mb-4">
                    <h3 className="text-xl font-bold text-slate-900">高階金牌經理</h3>
                    <span className="text-blue-600 font-semibold flex items-center gap-1">
                      卓鮑國際
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    東南亞跨境人力資源仲介(柬埔寨)。
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-24 mt-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center p-3 bg-emerald-100/50 rounded-2xl mb-4">
                 <Activity className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">專業與能力</h2>
              <p className="text-slate-600">結合金融實務經驗與市場洞察的操盤技能</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Core Competencies */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                  <LineChart className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-xl font-bold text-slate-900">核心專長</h3>
                </div>
                <div className="space-y-6">
                  <SkillBar title="股票操作與量化分析" level={95} color="bg-emerald-500" />
                  <SkillBar title="資產配置與風險控管" level={90} color="bg-teal-500" />
                  <SkillBar title="融資規劃與逾期談判" level={85} color="bg-cyan-500" />
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, delay: 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                  <Languages className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-xl font-bold text-slate-900">語言能力</h3>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-emerald-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 font-bold text-lg">
                        EN
                      </div>
                      <div className="font-bold text-slate-900">英文</div>
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-wide">精通</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:border-emerald-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 font-bold text-lg">
                        TW
                      </div>
                      <div className="font-bold text-slate-900">台語</div>
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-wide">精通</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white text-center py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-6">
            <TrendingUp className="w-8 h-8 text-emerald-200" />
          </div>
          <p className="text-slate-600 text-sm font-medium">
            © {new Date().getFullYear()} Kuan-Jie Lee (廷廷). All rights reserved.
          </p>
          <p className="text-slate-400 text-xs mt-2">
            The "NKUST Buffett" Portfolio | a111182106@nkust.edu.tw
          </p>
        </div>
      </footer>
    </div>
  );
}

// Utility Component for Progress Bars
function SkillBar({ title, level, color }: { title: string, level: number, color: string }) {
  return (
    <div>
      <div className="flex justify-between items-end mb-2">
        <span className="text-sm font-bold text-slate-700">{title}</span>
        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{level}%</span>
      </div>
      <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className={`h-full ${color} rounded-full relative overflow-hidden`} 
        >
          {/* Subtle shine effect on the progress bar */}
          <div className="absolute top-0 left-0 w-full h-full bg-white/20" style={{ transform: 'skewX(-45deg) translateX(-100%)', animation: 'progress-shine 2s infinite' }} />
        </motion.div>
      </div>
    </div>
  );
}

