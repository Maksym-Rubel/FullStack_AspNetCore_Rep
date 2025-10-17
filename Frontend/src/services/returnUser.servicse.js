import axios from "axios";
import { accountService } from "./account.service";
import { refreshService } from "./refreshToken.service";


export const returnUserclass =
{
    async returnUser() {
        try {
            const res = await axios.post(`http://192.168.1.121:5212/api/Account/Refresh?token=${refreshService.get()}`)
                // accountService.logout();
                console.log(res);
                accountService.login(res.data.accesessToken, res.data.refreshToken);
            return true;
            
        }
        catch (error) {

            console.log("REloginError");
            accountService.logout();
            return false;
        }
}
}
