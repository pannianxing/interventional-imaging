import { Link } from 'react-router-dom';
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">介入影像平台</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              专注介入医学影像技术的专业知识平台，汇聚技术资料、临床病例、专家观点，助力介入医学发展。
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>contact@intervention-imaging.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>400-888-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>北京市海淀区中关村科技园</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">内容中心</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/technology" className="hover:text-blue-400 transition-colors">
                  技术库
                </Link>
              </li>
              <li>
                <Link to="/cases" className="hover:text-blue-400 transition-colors">
                  病例中心
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="hover:text-blue-400 transition-colors">
                  厂商设备
                </Link>
              </li>
              <li>
                <Link to="/experts" className="hover:text-blue-400 transition-colors">
                  专家文章
                </Link>
              </li>
              <li>
                <Link to="/wechat" className="hover:text-blue-400 transition-colors">
                  公众号聚合
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">厂商专区</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/equipment/brand/飞利浦" className="hover:text-blue-400 transition-colors">
                  飞利浦医疗
                </Link>
              </li>
              <li>
                <Link to="/equipment/brand/西门子" className="hover:text-blue-400 transition-colors">
                  西门子医疗
                </Link>
              </li>
              <li>
                <Link to="/equipment/brand/联影" className="hover:text-blue-400 transition-colors">
                  联影医疗
                </Link>
              </li>
              <li>
                <Link to="/equipment/brand/GE医疗" className="hover:text-blue-400 transition-colors">
                  GE医疗
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">关于我们</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  平台介绍
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  加入我们
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  联系方式
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  隐私政策
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  用户协议
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2024 介入影像技术平台. 保留所有权利.
          </p>
          <p className="text-sm text-slate-500">
            京ICP备12345678号-1
          </p>
        </div>
      </div>
    </footer>
  );
}
