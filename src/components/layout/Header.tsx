import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, User, Stethoscope } from 'lucide-react';

const navItems = [
  { name: '首页', path: '/' },
  { name: '技术库', path: '/technology' },
  { name: '病例中心', path: '/cases' },
  { name: '厂商设备', path: '/equipment' },
  { name: '专家文章', path: '/experts' },
  { name: '公众号', path: '/wechat' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-gradient-to-b from-slate-900/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              isScrolled ? 'bg-blue-600' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Stethoscope className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={`text-xl font-bold tracking-tight ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}>
              介入影像平台
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? isScrolled
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-white bg-white/20'
                    : isScrolled
                    ? 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className={`relative flex items-center ${
                isScrolled ? 'text-slate-500' : 'text-white/70'
              }`}>
                <Search className="w-4 h-4 absolute left-3" />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="搜索技术、病例、设备..."
                  className={`pl-10 pr-4 py-2 w-56 lg:w-64 rounded-full text-sm transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
                    isScrolled
                      ? 'bg-slate-100 border-transparent focus:bg-white focus:border-blue-300 text-slate-700 placeholder-slate-400'
                      : 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/20'
                  }`}
                />
              </div>
            </form>

            <button className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isScrolled
                ? 'text-slate-600 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}>
              <User className="w-4 h-4" />
              <span>登录</span>
            </button>

            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-slate-600 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-2">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative flex items-center text-slate-500">
                <Search className="w-4 h-4 absolute left-3" />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="搜索技术、病例、设备..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-full text-sm bg-slate-100 border border-transparent focus:bg-white focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-700 placeholder-slate-400"
                />
              </div>
            </form>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-2 px-4 py-3 rounded-lg text-base font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors">
              登录 / 注册
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
