/* import React from "react";
import { IDKitWidget } from "@worldcoin/idkit";

export const WorldCoin = () => {
  const onSuccess = (res) => {
    const { merkle_root, nullifier_hash, proof, credential_type } = res;
    console.table(res)
  };

  return (
    <IDKitWidget
      app_id="app_staging_d5a2f007030ea64d9c92949205c579e8" // obtained from the Developer Portal
      action="vote_1" // this is your action name from the Developer Portal
      signal="user_value" // any arbitrary value the user is committing to, e.g. a vote
      credential_types={["orb", "phone"]} // the credentials you want to accept
      onSuccess={(res) => onSuccess(res)}
      enableTelemetry
    >
      {({ open }) => <button onClick={open} className="bg-blue-500 py-2 px-3 rounded-md">Click me</button>}
    </IDKitWidget>
  );
};
 */