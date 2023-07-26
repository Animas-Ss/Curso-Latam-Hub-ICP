import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import Time "mo:base/Time";

module {
    //Tiempo
    public type Time = Time.Time;

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
