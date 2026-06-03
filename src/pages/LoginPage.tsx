import oquvLogo from "../images/icons/oquv_markaz_icon.svg"
import tickicon from "../images/icons/tick_icon.svg"
import lefttick from "../images/icons/left-tick.svg"
import gamilicon from "../images/icons/gmail_icon.svg"
import greentick from "../images/icons/green-tick.svg"
import undovicon from "../images/icons/undov_icon.svg"
import callicon from "../images/icons/call_icon.svg"
import lockicon from "../images/icons/lock_icon.svg"
import eyesicon from "../images/icons/eyes_icon.svg"
import hideeyesicon from "../images/icons/hide_eyes_icon.svg"






  function LoginPage() {
    return (
      <div className="w-full h-screen flex ">
    {/* chap tomoni  */}
    <div className="bg-[#2563EB] w-1/2 h-[1042.8599853515625px] ">
    <div className="Main ml-10 mt-11">
      {/* tepa bo'lim */}
      <div className="flex gap-x-3 items-center mb-67"> 
        <div className="w-11 h-11 bg-white/15 flex items-center justify-center  rounded-xl">
        <img
        className="w-3 h-3"
        src={oquvLogo}
        alt="oquv-markaz-logo" />
        </div>
        <span className="text-white text-[20px] font-bold">O'quv Markaz</span>
      </div>
      {/* tepa bo'lim */}
      <div className="flex flex-col">
      <h5 className="mb-[19.19px] font-extrabold leading-12 text-white text-[40px] ">
          Bizning oilamizga <br />
          qo'shiling.
      </h5>
      <p className="mb-10.75 text-[18px] font-normal text-[#FFFFFFD9]">
        Ro'yxatdan o'ting va bepul birinchi darsga taklif <br />
        oling. 5000+ talaba bilan birga o'rgning va karyera <br />
        yo'lingizni boshlang.
      </p>
      <div className="mb-67">
        <div className="flex gap-x-3">
        <div className="w-6 h-6 bg-white/15 mb-3 rounded-xl p-2 items-center">
      <img className="w-2.25 h-2.25" src={tickicon} alt="tick_icon" />
        </div>
        <span className="text-[#FFFFFFE5] text-10">Birinchi darslar bepul</span>
        </div>
      <div className="flex gap-x-3">
        <div className="w-6 h-6 bg-white/15 mb-3 rounded-xl p-2 items-center">
      <img className="w-2.25 h-2.25" src={tickicon} alt="tick_icon" />
        </div>
        <span className="text-[#FFFFFFE5] text-10">35+ ta yo'nalish — o'zingiznikini tanlang</span>
        </div>
        <div className="flex gap-x-3">
        <div className="w-6 h-6 bg-white/15 mb-3 rounded-xl p-2 items-center">
      <img className="w-2.25 h-2.25" src={tickicon} alt="tick_icon" />
        </div>
        <span className="text-[#FFFFFFE5] text-10">Ish ta'minoti — 100+ hamkor kompaniya</span>
        </div>
      </div>
      {/* Bu yerga silka qo'yiladi Bosilganda Boshqa sahifaga o'tishi uchun. */}
        <div className="flex gap-x-125">
       <a className="text-[10px] text-[#FFFFFFB2]" href="#">© 2026 O'quv Markaz</a>
       <a className="text-[10px] text-[#FFFFFFB2]" href="#">Yordam kerakmi?</a>
        </div>
       {/* Bu yerga silka qo'yiladi Bosilganda Boshqa sahifaga o'tishi uchun. */}
      </div>
    </div>
    <div className="Footer"></div>
    </div>
    {/* o'ng tomoni */}
    <div className="w-1/2">
    <div className="flex gap-x-2 ml-152 mt-10 mb-10">
      <img  src={lefttick} alt="chapga_qaytish_icon" />
     <a className="text-[#6B7280] text-[14px]  leading-5.25" href="#">Bosh sahifaga</a>
    </div>
    <div className="flex flex-col ">
 <h2 className="text-[32px] mb-2 text-center mr-auto ml-auto text-[#111827] font-bold leading-8.5">Yangi hisob yarating</h2>
     <p className="text-[16px] font-normal mr-auto ml-56.25 mb-6 text-[#6B7280]">Ma'lumotlaringizni kiriting va bepul ro'yxatdan o'ting.</p>
    </div>
    <div className="flex gap-x-3  ml-45 mb-4">
    <div className="chap flex flex-col">
    <h6 className="text-[14px] font-medium mb-2">Ism</h6>
    <span className="w-58.5 h-11.75 bg-none rounded-[10px] font-normal border text-[14px] text-[#9CA3AF] p-3 border-[#A6ADB8]">Aziz</span>
    </div>
   <div className="o'ng flex flex-col">
    <h6 className="text-[14px] font-medium mb-2">Familiya</h6>
    <span className="w-58.5 h-11.75 bg-none rounded-[10px] font-normal border text-[14px] text-[#9CA3AF] p-3 border-[#A6ADB8]">Karimov</span>
    </div>
    </div>
    <div>
      <div className="flex flex-col ml-45">
  <h6 className="text-[14px] font-medium mb-2 text-gray-700">Email</h6>
  <div className="w-full max-w-120 h-12 mb-[7.5px] bg-transparent flex items-center rounded-[10px] border border-[#10B981] px-4 gap-x-4">
    <img className="w-4 h-4 object-contain" src={gamilicon} alt="gmail_icon" />
    <span className="text-[14px] font-normal text-black">
      aziz@example.uz
    </span>
  </div>
    <span className="flex gap-x-2.5 ">
      <img src={greentick} alt="yashil_tick_icon" />
      <h6 className="text-[#047857] text-[12px] font-medium mb-4">Email mavjud va to'g'ri formatda</h6>
    </span>
</div>
<div className="flex flex-col ml-45">
  <h6 className="text-[14px] font-medium mb-2 text-gray-700">Telefon raqam</h6>
  <div className="w-full max-w-120 h-12 mb-[7.5px] bg-transparent flex items-center rounded-[10px] border border-[#EF4444] px-4 gap-x-4">
    <img className="w-4 h-4 object-contain" src={callicon} alt="call_icon" />
    <span className="text-[14px] font-normal text-black">
      +998
    </span>
  </div>
    <span className="flex gap-x-2.5 ">
      <img className="w-4 h-4" src={undovicon} alt="undov_icon" />
      <h6 className="text-[#DC2626] text-[12px] font-medium mb-4">Telefon raqam to'liq emas — 9 raqam kiritiing</h6>
    </span>
</div>
<div className="flex flex-col ml-45">
  <h6 className="text-[14px] font-medium mb-2 text-gray-700">Parol</h6>
  <div className="w-full max-w-[480px] h-12 mb-[7.5px] bg-transparent flex items-center justify-between rounded-[10px] border border-[#D1D5DB] px-4">
  
  <div className="flex items-center gap-x-4">
    <img className="w-4 h-4 object-contain" src={lockicon} alt="lock_icon" />
    <span className="text-[14px] font-normal text-[#9CA3AF]">
      Kamida 8 ta belgi
    </span>
  </div>

  <div className="flex items-center gap-x-2">
    <img className="cursor-pointer" src={eyesicon} alt="ko'z_icon" />
    <img className="cursor-pointer" src={hideeyesicon} alt="hide_ko'z_icon" />
  </div>

</div>
    <span className="flex gap-x-2.5 ">
      <h6 className="text-[#6B7280] text-[12px] font-medium mb-4">Kamida 8 ta belgi, katta harf va raqam bo'lsin</h6>
    </span>
</div>
<div className="flex flex-col ml-45">
  <h6 className="text-[14px] font-medium mb-2 text-gray-700">Parolni tasdiqlang</h6>
  <div className="w-full max-w-[480px] h-12 mb-[7.5px] bg-transparent flex items-center justify-between rounded-[10px] border border-[#D1D5DB] px-4">
  
  <div className="flex items-center gap-x-4">
    <img className="w-4 h-4 object-contain" src={lockicon} alt="lock_icon" />
    <span className="text-[14px] font-normal text-[#9CA3AF]">
     Parolni qaytadan kiriting
    </span>
  </div>

  <div className="flex items-center gap-x-2">
    <img className="cursor-pointer" src={eyesicon} alt="ko'z_icon" />
    <img className="cursor-pointer" src={hideeyesicon} alt="hide_ko'z_icon" />
  </div>

</div>
</div>
    </div>
    </div>
      </div>
    );
  }

  export default LoginPage;