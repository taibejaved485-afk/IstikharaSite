import React, { useState, useEffect } from 'react';
import { Blog, Page } from '../types.ts';
import { saveBlog, getBlogs, deleteBlog } from '../services/db.ts';
import { FONTS } from '../constants.tsx';
import IconGenerator from './IconGenerator.tsx';

const AdminPanel: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'blogs' | 'branding'>('blogs');
  
  // Blog Form State
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [struggle, setStruggle] = useState('');
  const [solution, setSolution] = useState('');
  const [result, setResult] = useState('');
  const [titleFont, setTitleFont] = useState(FONTS[1].value); // Default to Jameel Noori
  const [bodyFont, setBodyFont] = useState(FONTS[1].value);

  useEffect(() => {
    if (isAuthenticated) {
      loadBlogs();
    }
  }, [isAuthenticated]);

  const loadBlogs = async () => {
    const data = await getBlogs();
    setBlogs(data);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple demo password
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const newBlog: Blog = {
      id: Date.now().toString(),
      title,
      content,
      imageUrl,
      struggle,
      solution,
      result,
      author: 'Admin',
      date: new Date().toLocaleDateString(),
      titleFont,
      bodyFont
    };
    await saveBlog(newBlog);
    loadBlogs();
    setIsAdding(false);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setImageUrl('');
    setStruggle('');
    setSolution('');
    setResult('');
    setTitleFont(FONTS[1].value);
    setBodyFont(FONTS[1].value);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      await deleteBlog(id);
      loadBlogs();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-20 p-8 bg-emerald-900 rounded-xl border border-amber-900/50 shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gold text-center">Admin Access</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-amber-200 mb-1">Enter Portal Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-emerald-950 border border-amber-900/30 rounded px-4 py-2 focus:border-amber-500 outline-none"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold py-2 rounded transition-colors">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <h2 className="text-4xl font-bold text-gold font-title golden-glow">Portal Control</h2>
        
        <div className="flex p-1 bg-emerald-950/50 rounded-2xl border border-amber-900/20">
          <button 
            onClick={() => setActiveTab('blogs')}
            className={`px-8 py-3 rounded-xl font-bold text-xs tracking-widest transition-all ${activeTab === 'blogs' ? 'bg-amber-500 text-emerald-950 shadow-lg' : 'text-amber-500/50 hover:text-amber-500'}`}
          >
            BLOGS
          </button>
          <button 
            onClick={() => setActiveTab('branding')}
            className={`px-8 py-3 rounded-xl font-bold text-xs tracking-widest transition-all ${activeTab === 'branding' ? 'bg-amber-500 text-emerald-950 shadow-lg' : 'text-amber-500/50 hover:text-amber-500'}`}
          >
            BRANDING
          </button>
        </div>
      </div>

      {activeTab === 'blogs' ? (
        <>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-amber-200 uppercase tracking-widest">Journal Entries</h3>
            <button 
              onClick={() => setIsAdding(!isAdding)}
              className="bg-emerald-950 border border-amber-500/20 text-gold px-6 py-2.5 rounded-xl font-bold hover:bg-amber-500 hover:text-emerald-950 transition-all flex items-center gap-2"
            >
              {isAdding ? 'Cancel' : '+ Create Entry'}
            </button>
          </div>

          {isAdding && (
            <form onSubmit={handleSave} className="bg-emerald-900/50 p-6 rounded-xl border border-amber-900/30 mb-8 space-y-6 animate-in slide-in-from-top-4 duration-500">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-amber-200 mb-1">Blog Title</label>
                    <input 
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full bg-emerald-950 border border-amber-900/30 rounded px-4 py-2 outline-none focus:border-amber-500 urdu-text"
                      placeholder="عنوان درج کریں (اردو یا انگریزی)"
                      style={{ fontFamily: titleFont }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-amber-200 mb-1">Title Font</label>
                    <select 
                      value={titleFont}
                      onChange={(e) => setTitleFont(e.target.value)}
                      className="w-full bg-emerald-950 border border-amber-900/30 rounded px-4 py-2 outline-none"
                    >
                      {FONTS.map(f => <option key={f.name} value={f.value}>{f.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-amber-200 mb-1">Featured Image</label>
                    <input 
                      type="file"
                      onChange={handleImageUpload}
                      className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-500 file:text-emerald-950 hover:file:bg-amber-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-amber-200 mb-1">Body Font</label>
                    <select 
                      value={bodyFont}
                      onChange={(e) => setBodyFont(e.target.value)}
                      className="w-full bg-emerald-950 border border-amber-900/30 rounded px-4 py-2 outline-none"
                    >
                      {FONTS.map(f => <option key={f.name} value={f.value}>{f.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-amber-200 mb-1">Brief Content (Intro)</label>
                    <textarea 
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="w-full h-24 bg-emerald-950 border border-amber-900/30 rounded px-4 py-2 outline-none focus:border-amber-500 resize-none urdu-text"
                      placeholder="مختصر تعارف یہاں لکھیں..."
                      style={{ fontFamily: bodyFont }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm text-amber-200 mb-1">The Struggle (آزمائش)</label>
                  <textarea 
                    value={struggle}
                    onChange={(e) => setStruggle(e.target.value)}
                    className="w-full h-32 bg-emerald-950 border border-amber-900/30 rounded px-4 py-2 outline-none focus:border-amber-500 resize-none urdu-text"
                    placeholder="آزمائش اور جدوجہد درج کریں..."
                    style={{ fontFamily: bodyFont }}
                  />
                </div>
                <div>
                  <label className="block text-sm text-amber-200 mb-1">The Solution (روحانی حل)</label>
                  <textarea 
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    className="w-full h-32 bg-emerald-950 border border-amber-900/30 rounded px-4 py-2 outline-none focus:border-amber-500 resize-none urdu-text"
                    placeholder="روحانی حل (وظیفہ) درج کریں..."
                    style={{ fontFamily: bodyFont }}
                  />
                </div>
                <div>
                  <label className="block text-sm text-amber-200 mb-1">The Result (کامیابی)</label>
                  <textarea 
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                    className="w-full h-32 bg-emerald-950 border border-amber-900/30 rounded px-4 py-2 outline-none focus:border-amber-500 resize-none urdu-text"
                    placeholder="کامیابی اور نتیجہ درج کریں..."
                    style={{ fontFamily: bodyFont }}
                  />
                </div>
              </div>

              {imageUrl && (
                <div className="mt-4">
                  <img src={imageUrl} alt="Preview" className="h-32 rounded border border-amber-900/30" />
                </div>
              )}

              <button type="submit" className="w-full py-4 bg-amber-500 hover:bg-gold-light text-emerald-950 font-bold rounded-xl transition-all shadow-lg hover-shine">
                Publish Journal Entry
              </button>
            </form>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-emerald-900 border border-amber-900/30 rounded-xl overflow-hidden group hover:border-amber-500/30 transition-all">
                {blog.imageUrl && (
                  <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-amber-100 mb-2 truncate urdu-text" style={{ fontFamily: blog.titleFont }}>
                    {blog.title}
                  </h3>
                  <p className="text-sm text-amber-200/50 mb-4">{blog.date}</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleDelete(blog.id)}
                      className="flex-1 py-2 text-red-400 border border-red-400/30 rounded hover:bg-red-400/10 transition-colors"
                    >
                      Delete
                    </button>
                    <button className="flex-1 py-2 text-amber-400 border border-amber-400/30 rounded hover:bg-amber-400/10 transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {blogs.length === 0 && (
              <div className="col-span-full py-20 text-center text-gray-500 italic">
                No blog posts found. Start by adding one!
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="max-w-4xl mx-auto">
          <IconGenerator />
        </div>
      )}
    </div>
  );
};

export default AdminPanel;