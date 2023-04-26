import React from "react";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

export default function CountrySideFront({ data }) {
  const { languages } = data;
  const [lang] = languages ? Object.keys(languages) : ["No official language"];
  const [cur] = data.currencies
    ? Object.keys(data.currencies)
    : ["No official"];
  const { name, symbol } =
    cur !== "No official"
      ? data.currencies[`${cur}`]
      : { name: "No official", symbol: "No official" };

  function formatCompactNumber(number) {
    if (number < 1000) {
      return number;
    } else if (number >= 1000 && number < 1_000_000) {
      return (number / 1000).toFixed(1) + "K";
    } else if (number >= 1_000_000 && number < 1_000_000_000) {
      return (number / 1_000_000).toFixed(1) + "M";
    } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
      return (number / 1_000_000_000).toFixed(1) + "B";
    } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
      return (number / 1_000_000_000_000).toFixed(1) + "T";
    }
  }
  return (
    <div id="front" className="country__side country__side--front">
      <img
        src={data.flags.png}
        alt={`${data?.name?.common} flag`}
        className="country__flag"
      />

      <p className="country__name">{data.name.common}</p>
      <p className="country__region">
        <span className="country__detail">
          <PublicOutlinedIcon />
          {data.region}
        </span>
      </p>
      <p className="country__pop">
        <span className="country__detail">
          <EscalatorWarningOutlinedIcon />
          {formatCompactNumber(data.population)}
        </span>
      </p>
      <p className="country__lang">
        <span className="country__detail">
          <LanguageOutlinedIcon />
          {lang !== "No official language" ? data.languages[lang] : lang}
        </span>
      </p>
      <p className="country__currency">
        <span className="country__detail">
          <AttachMoneyOutlinedIcon />
          {cur ? `${name} ${symbol ? `(${symbol})` : ""}` : "No official"}
        </span>
      </p>
    </div>
  );
}
