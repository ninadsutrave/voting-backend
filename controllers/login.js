import jwt from 'jsonwebtokens'

const login = async (req,res) => {

    try {
        const { id, password } = req.body;

        if (!(id && password)) {
            res.status(400).send("All input is required");
        }

        if (id === process.env.ADMIN_ID && password === process.env.ADMIN_PASSWORD) {

            const token = jwt.sign(
                { user_id: user._id, email },
                    process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            user.token = token;

            res.status(200).json(user);
        }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
}