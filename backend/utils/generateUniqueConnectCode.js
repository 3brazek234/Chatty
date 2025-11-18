const { customAlphabet } = require('nanoid'); // 🚨 استيراد customAlphabet من nanoid

const User = require("../models/User.js");

// 🚨 التصحيح هنا:
// بنستخدم customAlphabet اللي بتسمح بتحديد الـ alphabet والطول.
// "0123456789" هو الـ alphabet للأرقام فقط.
// 6 هو طول الكود.
const generateCodeFn = customAlphabet('0123456789', 6); // 🚨 دي هتكون الدالة اللي بتولد الكود

const generateUniqueConnectCode = async () => {
  let code, exists;
  do {
    // 🚨 بننادي الدالة اللي تم تعريفها
    code = generateCodeFn();
    // 🚨 تأكد إن User.exists بترجع true/false بشكل صحيح
    // ممكن تستخدم findOne بدلاً من exists لو حبيت تجيب الـ document
    exists = await User.exists({ connectCode: code });
    // User.exists() بترجع object { _id: ... } لو موجود، أو null لو مش موجود
    // فالتحقق بيكونexists !== null
  } while (exists); // أو exists._id لو User.exists بترجع object
  return code;
};

module.exports = generateUniqueConnectCode;