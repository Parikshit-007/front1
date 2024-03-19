import Breadcrumb from "../../components/Breadcrumb";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Recipt_Voucher from "./Tabs/Recipt_Voucher";
import Payment_Voucher from "./Tabs/Payment_Voucher";
import Cashbook from "./Tabs/Cashbook";
import Account_Ledger from "./Tabs/Account_Ledger";
import Bank_Accounts from "./Tabs/Bank_Accounts";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Account_Profile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Breadcrumb></Breadcrumb>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Recipt Voucher" {...a11yProps(0)} />
            <Tab label="Payment Voucher" {...a11yProps(1)} />
            <Tab label="Cashbook" {...a11yProps(2)} />
            <Tab label="Account Ledger" {...a11yProps(3)} />
            <Tab label="Bank Accounts" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Recipt_Voucher />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Payment_Voucher />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Cashbook />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Account_Ledger />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <Bank_Accounts />
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default Account_Profile;
