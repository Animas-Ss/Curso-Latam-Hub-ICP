import Text "mo:base/Text";
import Result "mo:base/Result";
import Type "Types";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Bool "mo:base/Bool";
import Time "mo:base/Time";

actor class Animas() {
  type Account = Type.Account;

  let Accounts = HashMap.HashMap<Principal, Account>(0, Principal.equal, Principal.hash);

  private func isRegister(owner : Principal) : Bool {
    switch (Accounts.get(owner)) {
      case (null) {
        return false;
      };
      case (?res) {
        return true;
      };
    };
  };

  public shared ({ caller }) func addProfile( perfile: Account) : async Result.Result<(), Text> {
    if (Principal.isAnonymous(caller)) {
      return #err "You must be logger in";
    };

    if (isRegister(caller)) {
      return #err("You are already registered (" # Principal.toText(caller) # ")");
    };

    Accounts.put(caller, perfile);
    
    return #ok();
  };
};
