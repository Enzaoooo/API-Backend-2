import { create } from "../../models/accountModel.js"

const createController = async (req, res) => {
    const account = req.body
    const result = await create(account)

    if(!result)
        return res.status(401).json({
            error: "erro ao criar conta"
    })

    res.json({
        success: "Conta criada com sucesso",
        account: result
    })

}

export default createController