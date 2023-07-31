import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import Time "mo:base/Time";

module {
    //Tiempo
    public type Time = Time.Time;
    
    //typo de Autenticacion
    public type WorldCoin = {
       merkle_root: Text;
       nullifier_hash: Text;
       proof: Text;
       credential_type: Text;
    };


    //User Perfil
    public type UserProfile = {
        name: Text;
        tel: Text;
        email: Text;
        registro: Time;
    };

    //Cuenta (Account) de los usuarios
    public type Account = {
        owner: Principal;
        profile: UserProfile;
    }
    
};
