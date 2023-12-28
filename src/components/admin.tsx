"use client";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Fieldset,
  Flex,
  Grid,
  Input,
  Label,
  useTheme,
  View,
} from "@aws-amplify/ui-react";
import aws_exports from "../aws-exports";

export default function Admin({ signOut, user }) {
  console.log(user);
  const { tokens } = useTheme();
  const [s3results, setS3Results] = useState([]);
  const aws_user_pools_web_client_id = aws_exports.aws_user_pools_web_client_id;
  const cognito_access = localStorage.getItem(
    `CognitoIdentityServiceProvider.${aws_user_pools_web_client_id}.remy.greinhofer.accessToken`
  );

  useEffect(() => {
    async function fetchS3Results() {
      const res = await fetch(`/s3results?cognito_access=${cognito_access}`);
      const data = await res.json();
      setS3Results(data);
    }

    fetchS3Results();
  }, []);

  // useEffect(() => {
  //   async function submitAnalysis() {
  // const aws_user_pools_web_client_id = aws_exports.aws_user_pools_web_client_id;
  // const cognito_access = localStorage.getItem(
  //   `CognitoIdentityServiceProvider.${aws_user_pools_web_client_id}.remy.greinhofer.accessToken`
  // );
  //     const body = {"city": }
  //     const res = await fetch(`/analysis?cognito_access=${cognito_access}`);
  //     const data = await res.json();
  //     setSubmission(data);
  //   }
  // }, []);

  console.log("S3 Results:");
  console.log(s3results);
  const ress = s3results.data;
  console.log(ress);
  // const listItemss = ress.map((res) => <li key={res}>{res}</li>);
  // console.log(listItemss);

  const listItemss = <li>plop</li>;

  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  const [region, setRegion] = useState([]);
  const [fipsCode, setFipsCode] = useState([]);
  const [result, setResult] = useState<any>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      country: country,
      city: city,
      region: region,
      fipscode: fipsCode,
    };
    console.log("hola", body);
    // 👇 call backend endpoint using fetch API
    fetch(`https://api.peopleforbikes.xyz/enqueue/city`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${cognito_access}`,
      },
    })
      .then((result) => {
        console.log("client result", result);
      })
      .catch((err) => {
        console.log("fetch error client", err);
      });
  };

  return (
    <Grid
      columnGap={tokens.space.xs}
      rowGap={tokens.space.xs}
      templateColumns="1fr 1fr 1fr"
      templateRows="1fr 3fr 1fr"
    >
      <Card columnStart="1" columnEnd="-1" color={tokens.colors.teal[60]}>
        <Flex direction="row" justifyContent="space-between">
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </Flex>
      </Card>
      <Card columnStart="1" columnEnd="2" color={tokens.colors.teal[60]}>
        Nav
      </Card>
      <Card columnStart="2" columnEnd="-1" color={tokens.colors.teal[60]}>
        {/* <Flex direction="column"> */}
        <h2>Submit a new analysis</h2>
        <Fieldset legend="Analysis" variation="outlined" direction="column">
          <form onSubmit={(e) => handleSubmit(e)}>
            <Flex direction="column" gap="small">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                size="small"
                width="100%"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Flex>

            <Flex direction="column" gap="small">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                width="100%"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Flex>

            <Flex direction="column" gap="small">
              <Label htmlFor="region">Region</Label>
              <Input
                id="region"
                size="large"
                width="100%"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              />
            </Flex>

            <Flex direction="column" gap="small">
              <Label htmlFor="fipsCode">FIPS Code</Label>
              <Input
                id="fipsCode"
                size="large"
                width="100%"
                value={fipsCode}
                onChange={(e) => setFipsCode(e.target.value)}
              />
            </Flex>
            <Button variation="primary" type="submit">
              Submit
            </Button>
          </form>
        </Fieldset>
        <Flex direction="column">
          <h2>BNA Results</h2>
          <div>
            <ul>{listItemss}</ul>
          </div>
        </Flex>
      </Card>
      <Card columnStart="1" columnEnd="-1" color={tokens.colors.teal[60]}>
        Footer
      </Card>
    </Grid>
  );
}
