import axios from "axios";
import connectDB from "../../db/db";
import asyncHandler from "../../hooks/asynchandler";
import { GoogleUser } from "../../model";
//import { v4 as uuidv4 } from 'uuid/dist';
import {} from "crypto";
import Jwt from "jsonwebtoken";

export default asyncHandler(async (req: any, res: any) => {
  connectDB();

  try {
    const result = await GoogleUser.create({
      email: "asdasdada",
      username: "adsasdasd",
      userID: "d4fc6aa4-9f62-4f0f-a76e-5f6b428d22a0",
    });
    console.log("result returned", result);
  } catch (err) {
    console.log("error returned", err);
  }
  res.status(200).json({
    login: true,
    message: "User Already Exists!",
  });
  if (req.body.googleAccessToken) {
    console.log("reached here", req.body.googleAccessToken);
    // google oauth
    axios
      .get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${req.body.googleAccessToken}`,
          "accept-encoding": "*",
        },
      })
      .then(async (response) => {
        ////console.log("HKC::back response", response.data);
        const username = response.data.email.split("@")[0];
        const email = response.data.email;
        const alreadyExistingUser = await GoogleUser.findOne({
          email: email,
        });
        // console.log(alreadyExistingUser)
        if (alreadyExistingUser) {
          ////console.log("existing user");
          res.status(200).json({
            login: true,
            message: "User Already Exists!",
          });
        } else {
          //const userID = uuidv4();
          try {
            const newGoogleUser = await GoogleUser.create({
              email: email,
              username: username,
              userID: "asdadadad", //userID,
            });
            const token = Jwt.sign(
              {
                email,
                username,
              },
              "5150e0d01f0169e1116f0efc8abc58b746c887ca2481ed0c7bf32decca36c86f6ddee7bcef2aa9b0f79400ff4e0526dfc51d05daf786d46fe2f41c9eaadcf621"
            );

            res.status(200).json({
              newGoogleUser,
              token,
            });
          } catch (e) {
            //console.log(e);
          }
        }
      })
      .catch((error) => {
        res.status(400).json({
          message: "Invalid Credentials",
        });
      });
  } /*else {
    const { email, password } = req.body;

    try {
      if (!(email && password)) {
        return res.status(400).json({
          message: "All fields are compulsory",
        });
      }

      const existingUser = await User.findOne({
        email: email,
      });

      if (existingUser) {
        return res.status(400).json({
          message: "User already exists",
        });
      }
      const userID = uuidv4();
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        email: email,
        password: hashedPassword,
        userID: userID,
      });

      res.status(201).json({
        user: newUser,
      });
    } catch (error) {
      //console.log(error);
      res.status(500).json({
        message: "Something went wrong",
      });
    }
  }*/
});
