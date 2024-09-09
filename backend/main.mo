import Func "mo:base/Func";

import Array "mo:base/Array";
import Text "mo:base/Text";
import Error "mo:base/Error";
import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

actor {
  stable let stableVar : Text = "42"; // Corrected initialization

  var mutableVar : Nat = 0; // Corrected type

  public func brokenFunction() : async Text {
    let result : ?Text = ?"Not a number"; // Corrected type
    switch (result) {
      case (null) { return "Error"; };
      case (?value) { return value; }; // Now correctly returns Text
    };
  };

  public func mismatchedTypes(input : Text) : async Nat {
    return Text.size(input)
  };

  public func nonExistentFunction() : async () {
    Debug.print("This function does nothing");
  };

  system func preupgrade() {
    Debug.print("Preupgrade");
  };

  system func postupgrade() {
    Debug.print("Postupgrade");
  };
}