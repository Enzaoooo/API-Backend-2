import { deleteAccount } from "../../models/accountModel.js"

const remove = async (req, res) => {
    const {id} = req.params
    try {
        const account = await deleteAccount(+id)
        
        return res.json({
            success: "Conta Removida com sucesso!",
            account
        
        })
    } catch (error) {
        console.log(error)
        if (error?.code === 'P2025')
            return res.status(404).json({
                error: `Conta com o id {$id}, não encontrado! `
            })
    }
}

export default remove