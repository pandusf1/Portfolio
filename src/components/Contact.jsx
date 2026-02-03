import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); 
  
  // State untuk memilih metode pengiriman ('email' atau 'whatsapp')
  const [sendMethod, setSendMethod] = useState('email'); 

  const handleSend = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    // --- LOGIKA WHATSAPP ---
    if (sendMethod === 'whatsapp') {
        // 1. Ambil data dari form manual
        const name = form.current.user_name.value;
        const email = form.current.user_email.value;
        const msg = form.current.message.value;

        // 2. Format pesan WA (Gunakan %0A untuk Enter/Baris baru)
        const waMessage = `Halo, saya *${name}* (${email}).%0A%0A${msg}`;
        const phoneNumber = '6285789118146'; 

        // 3. Buka link WA
        window.open(`https://wa.me/${phoneNumber}?text=${waMessage}`, '_blank');
        
        setIsLoading(false);
        setStatus('success');
        form.current.reset();
        return; 
    }

    // --- LOGIKA EMAIL (EMAILJS) ---
    const SERVICE_ID = 'service_xnzvgkh';  
    const TEMPLATE_ID = 'template_bj6liif'; 
    const PUBLIC_KEY = 'cK-IENWzv0yV4H2JN';   

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setIsLoading(false);
          setStatus('success');
          form.current.reset(); 
      }, (error) => {
          console.log(error.text);
          setIsLoading(false);
          setStatus('error');
      });
  };

  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-12 -mt-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Let's Connect</h2>
            <p className="text-slate-600">Pilih metode yang nyaman bagi Anda untuk berdiskusi.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 max-w-5xl mx-auto">
            
            {/* Bagian Kiri: Info Kontak (Tetap Sama) */}
            <div className="w-full md:w-5/12 bg-slate-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-20 -ml-10 -mb-10"></div>
                
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-400">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider">Email</p>
                                <p className="font-medium text-sm md:text-base">pandusf1@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-green-400">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider">WhatsApp</p>
                                <p className="font-medium text-sm md:text-base">+62 857 8911 8146</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-red-400">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider">Location</p>
                                <p className="font-medium text-sm md:text-base">Mranggen, Kab. Demak, Indonesia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bagian Kanan: Formulir + Switcher */}
            <div className="w-full md:w-7/12 p-8 md:p-10">
                
                {/* --- TAB SWITCHER (PILIHAN) --- */}
                <div className="flex bg-slate-100 p-1 rounded-xl mb-8">
                    <button 
                        onClick={() => setSendMethod('email')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                            sendMethod === 'email' 
                            ? 'bg-white text-blue-600 shadow-sm' 
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                    >
                        <Mail size={16} /> Email
                    </button>
                    <button 
                         onClick={() => setSendMethod('whatsapp')}
                         className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                            sendMethod === 'whatsapp' 
                            ? 'bg-white text-green-600 shadow-sm' 
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                    >
                        <MessageCircle size={16} /> WhatsApp
                    </button>
                </div>

                <form ref={form} onSubmit={handleSend} className="space-y-5">
                    
                    {status === 'success' && (
                        <div className="bg-green-100 text-green-700 p-3 rounded-lg flex items-center gap-2 text-sm">
                            <CheckCircle size={16} /> 
                            {sendMethod === 'email' ? 'Email terkirim!' : 'Membuka WhatsApp...'}
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="bg-red-100 text-red-700 p-3 rounded-lg flex items-center gap-2 text-sm">
                            <AlertCircle size={16} /> Gagal mengirim. Coba lagi.
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-slate-700">Nama Lengkap</label>
                            <input type="text" name="user_name" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-slate-700">Email</label>
                            <input type="email" name="user_email" required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="email@contoh.com" />
                        </div>
                    </div>
                    
                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-slate-700">Pesan</label>
                        <textarea name="message" required rows="4" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none" placeholder="Halo, saya ingin mendiskusikan..."></textarea>
                    </div>

                    {/* Tombol Berubah Warna & Ikon Sesuai Pilihan */}
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className={`w-full font-bold py-3.5 rounded-xl text-white transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed ${
                            sendMethod === 'email' 
                            ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-200' 
                            : 'bg-green-600 hover:bg-green-700 shadow-green-200'
                        } shadow-lg`}
                    >
                        {isLoading ? (
                            <> <Loader2 size={20} className="animate-spin" /> Proses... </>
                        ) : (
                            <> 
                                {sendMethod === 'email' ? <Send size={20} /> : <MessageCircle size={20} />} 
                                {sendMethod === 'email' ? 'Kirim Email' : 'Kirim WhatsApp'}
                            </>
                        )}
                    </button>
                </form>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;