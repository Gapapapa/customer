const dailyReply = {}
exports.run = {
   async: async (m, {
      client,
      body,
      prefixes
   }) => {
      try {        
         const today = new Date().toDateString()
         if (dailyReply[m.sender] === today) {
            return
         }
         const replyMessages = `Hai @${m.sender.split`@`[0]} 🧛🏻

Terima kasih sudah menghubungi layanan bantuan, akun ini sepenuhnya adalah bot sebagai sarana informasi singkat terkait produk carti bot.

Kirim angka sesuai informasi yang kamu butuhkan :

    *1*. Bagaimana cara membeli Layanan Premium ?
    *2*. Bagaimana cara membeli Layanan Rental Bot ?
    *3*. Kenapa akun bisa terkena Suspensi/Banned ?

> Jika ingin menghubungi admin secara langsung untuk keperluan *Pembelian Premium*, *Rental Bot* dan *Layanan Bantuan Carti BOT* hubungi via whatsapp : wa.me/6285771647181`
         await client.reply(m.chat, replyMessages)
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   cache: true,
   location: __filename
}