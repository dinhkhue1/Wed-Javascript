import bcrypt from "bcryptjs";
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  let hashPasswordFromBcrypt = await hashUserPassword(data.MatKhau);
  console.log("data được tạo");
  console.log(data);
  console.log(hashPasswordFromBcrypt);
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.MatKhau);
      await db.User.create({
        email: data.Email,
        password: hashPasswordFromBcrypt,
        firstname: data.Ten,
        lastname: data.TenDem,
        address: data.DiaChi,
        phonenumber: data.SoDt,
        roleId: data.NguoiDung,
      });
      resolve("tạo thành công người dùng mới");
    } catch (e) {
      reject(e);
    }
  });
};

let hashUserPassword = (MatKhau) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(MatKhau, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(error);
    }
  });
};

let getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = db.User.findAll({
        raw: true,
      });
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};
let getUserInforById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
        raw: true,
      });
      if (user) {
        resolve(user);
      } else {
        resolve({});
      }
    } catch (error) {
      reject(error);
    }
  });
};
let updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: data.id },
      });
      if (user) {
        user.firstname = data.Ten;
        user.lastname = data.TenDem;
        user.address = data.DiaChi;
        user.phonenumber = data.SoDt;
        await user.save();
        let allUser = await db.User.findAll();
        resolve(allUser);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
};
let deleteUserById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
      });

      if (user) {
        await user.destroy();
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createNewUser: createNewUser, // tao nguoi dung moi
  getAllUser: getAllUser, // lay tat ca nguoi dung
  getUserInforById: getUserInforById,
  updateUserData: updateUserData,
  deleteUserById: deleteUserById,
};
