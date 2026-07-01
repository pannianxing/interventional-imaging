import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Eye,
  Calendar,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  User,
  Clock,
  Stethoscope,
  Pill,
  Activity,
  Send,
} from 'lucide-react';
import { cases } from '../data/mockData';
import type { CaseItem } from '../types';

interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  time: string;
  likes: number;
}

const mockComments: Comment[] = [
  {
    id: 'c1',
    author: '李医生',
    avatar: 'L',
    content: '这个病例很典型，前降支闭塞的处理很规范，血栓抽吸后支架植入效果很好。',
    time: '2024-06-19',
    likes: 23,
  },
  {
    id: 'c2',
    author: '王主任',
    avatar: 'W',
    content: '术后抗血小板治疗方案是怎样的？能否分享一下？',
    time: '2024-06-19',
    likes: 15,
  },
  {
    id: 'c3',
    author: '张医师',
    avatar: 'Z',
    content: '学习了，感谢分享！我们科室也有类似病例，处理方式略有不同，有机会可以交流。',
    time: '2024-06-18',
    likes: 8,
  },
];

export default function CaseDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState('');

  const caseData = useMemo<CaseItem | undefined>(() => {
    return cases.find((c) => c.id === id);
  }, [id]);

  const difficultyColors = {
    '初级': 'bg-green-100 text-green-700 border-green-200',
    '中级': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    '高级': 'bg-red-100 text-red-700 border-red-200',
  };

  const nextImage = () => {
    if (caseData && currentImageIndex < caseData.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2000);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: `c${Date.now()}`,
        author: '我',
        avatar: '我',
        content: newComment.trim(),
        time: '刚刚',
        likes: 0,
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  if (!caseData) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-700 mb-2">病例未找到</h2>
          <p className="text-slate-500 mb-4">您访问的病例不存在或已被移除</p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {showShareToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-slate-800 text-white rounded-lg shadow-lg">
          分享链接已复制到剪贴板
        </div>
      )}

      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回列表
          </button>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${difficultyColors[caseData.difficulty]}`}>
              {caseData.difficulty}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/30 text-emerald-200">
              {caseData.department}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/30 text-cyan-200">
              {caseData.technology}
            </span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
            {caseData.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {caseData.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {caseData.publishDate}
            </span>
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              {caseData.views.toLocaleString()} 浏览
            </span>
            <span className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              {caseData.likes} 点赞
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="relative aspect-video bg-slate-900">
                <img
                  src={caseData.images[currentImageIndex]}
                  alt={`${caseData.title} - 图${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
                {caseData.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      disabled={currentImageIndex === 0}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      disabled={currentImageIndex === caseData.images.length - 1}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {caseData.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/50 text-white text-sm">
                  {currentImageIndex + 1} / {caseData.images.length}
                </div>
              </div>
              {caseData.images.length > 1 && (
                <div className="p-4 border-t border-slate-100">
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {caseData.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex
                            ? 'border-emerald-500 ring-2 ring-emerald-200'
                            : 'border-transparent hover:border-slate-300'
                        }`}
                      >
                        <img src={img} alt={`缩略图${index + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-600" />
                病例概要
              </h2>
              <p className="text-slate-600 leading-relaxed">{caseData.summary}</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-emerald-600" />
                患者信息
              </h2>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-slate-600 leading-relaxed">{caseData.patientInfo}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-emerald-600" />
                诊断
              </h2>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-slate-700 font-medium">{caseData.diagnosis}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Pill className="w-5 h-5 text-emerald-600" />
                治疗方案
              </h2>
              <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
                <p className="text-slate-700 leading-relaxed">{caseData.treatment}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                  病例讨论
                </h2>
                <span className="text-sm text-slate-500">{comments.length} 条评论</span>
              </div>

              <form onSubmit={handleSubmitComment} className="mb-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-medium flex-shrink-0">
                    我
                  </div>
                  <div className="flex-1">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="分享您的看法或提问..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 resize-none text-slate-700 placeholder-slate-400"
                      rows={3}
                    />
                    <div className="flex justify-end mt-2">
                      <button
                        type="submit"
                        disabled={!newComment.trim()}
                        className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send className="w-4 h-4" />
                        发表评论
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-medium flex-shrink-0">
                      {comment.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-medium text-slate-800">{comment.author}</span>
                        <span className="text-xs text-slate-400">{comment.time}</span>
                      </div>
                      <p className="text-slate-600 text-sm mb-2">{comment.content}</p>
                      <button className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-emerald-600 transition-colors">
                        <Heart className="w-3.5 h-3.5" />
                        {comment.likes}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-semibold text-slate-800 mb-4">操作</h3>
              <div className="space-y-3">
                <button
                  onClick={handleLike}
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    isLiked
                      ? 'bg-red-50 text-red-600 border border-red-200'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500' : ''}`} />
                  {isLiked ? '已点赞' : '点赞'}
                </button>
                <button
                  onClick={handleShare}
                  className="w-full py-3 rounded-lg font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  分享病例
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-semibold text-slate-800 mb-4">设备信息</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">品牌</span>
                  <span className="text-sm font-medium text-slate-700">{caseData.equipmentBrand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">型号</span>
                  <span className="text-sm font-medium text-slate-700">{caseData.equipmentModel}</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/equipment')}
                className="w-full mt-4 py-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                查看设备详情
              </button>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl shadow-sm p-6 text-white">
              <h3 className="font-semibold mb-2">更多病例</h3>
              <p className="text-sm text-white/80 mb-4">
                浏览同科室、同技术类型的更多临床病例
              </p>
              <button
                onClick={() => navigate('/cases')}
                className="w-full py-2 bg-white text-emerald-600 rounded-lg font-medium hover:bg-white/90 transition-colors text-sm"
              >
                查看全部病例
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
