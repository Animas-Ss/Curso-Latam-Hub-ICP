import Text "mo:base/Text";
import Result "mo:base/Result";
import Type "Types";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Bool "mo:base/Bool";
import Time "mo:base/Time";

actor{
  type Profile = Type.UserProfile;
  type Account = Type.Account;
  let Accounts = HashMap.HashMap<Principal, Account>(0, Principal.equal, Principal.hash);

  private func _isRegister(owner : Principal) : Bool {
    switch (Accounts.get(owner)) {
      case (null) {
        return false;
      };
      case (?res) {
        return true;
      };
    };
  };

  public query func _perfile( user: Principal) : async Result.Result<Profile, Text> {
    switch(Accounts.get(user)) {
      case(null) { 
        return #err("perfile no existe");
      };
      case(?res) { 
        return #ok(res.profile);
      };
    };
  };

  public shared({caller}) func _login( user: Principal) : async Result.Result<Text, Text> {
    if (Principal.toText(user) == "undefined") {
      return #err ("Tu no estas logeado (" # Principal.toText(user) # ")");
    };
    if (_isRegister(user)) {
      return #ok("Verificado");
    };
    let newAccount : Account = {
       owner = user;
       profile = {
        name = "ANONIMO";
        tel = "NO VERIFICADO";
        email = "NO VERIFICADO";
        registro = Time.now();
       }
    };
    Accounts.put(user, newAccount);
    return #ok("Register");
  };





};
