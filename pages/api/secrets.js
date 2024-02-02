import {
    SecretsManagerClient,
    GetSecretValueCommand,
  } from "@aws-sdk/client-secrets-manager";

const secrets = async (req, res) => {
    const secret_name = "aws/secretmanager/example";
    const client = new SecretsManagerClient({
        region: "us-east-2",
      });
      
      let response;
      
      try {
        response = await client.send(
          new GetSecretValueCommand({
            SecretId: secret_name,
            VersionStage: "AWSCURRENT",
          })
        );
      } catch (error) {
        throw error;
      }
      
      const secret = response.SecretString;
      res.status(200).json({ secret });
}

export default secrets;