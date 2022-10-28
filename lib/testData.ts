type Transaction = {
  [key: string]: string | number;
};

export const getTransactions = (): Transaction[] => [
  {
    "Transaction Date": "10/25/2022",
    "Post Date": "10/26/2022",
    "Description": "WAL-MART #3639     SE2",
    "Category": "Groceries",
    "Type": "Return",
    "Amount": 15.47,
    "Memo": ""
  },
  {
    "Transaction Date": "10/24/2022",
    "Post Date": "10/25/2022",
    "Description": "WAL-MART #3639",
    "Category": "Groceries",
    "Type": "Sale",
    "Amount": -25.81,
    "Memo": ""
  },
  {
    "Transaction Date": "09/30/2022",
    "Post Date": "09/30/2022",
    "Description": "AUTOMATIC PAYMENT - THANK",
    "Category": "",
    "Type": "Payment",
    "Amount": 115.15,
    "Memo": ""
  },
  {
    "Transaction Date": "09/23/2022",
    "Post Date": "09/25/2022",
    "Description": "AMZN Mktp US*1U5MQ6CA2",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -24.44,
    "Memo": ""
  },
  {
    "Transaction Date": "08/16/2022",
    "Post Date": "08/16/2022",
    "Description": "Payment Thank You - Web",
    "Category": "",
    "Type": "Payment",
    "Amount": 527.88,
    "Memo": ""
  },
  {
    "Transaction Date": "08/04/2022",
    "Post Date": "08/05/2022",
    "Description": "AMZN Mktp US*7354S8BR3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -115.15,
    "Memo": ""
  },
  {
    "Transaction Date": "08/01/2022",
    "Post Date": "08/01/2022",
    "Description": "AUTOMATIC PAYMENT - THANK",
    "Category": "",
    "Type": "Payment",
    "Amount": 472.66,
    "Memo": ""
  },
  {
    "Transaction Date": "07/26/2022",
    "Post Date": "07/27/2022",
    "Description": "AMZN Mktp US*UU1EX9TK3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -527.88,
    "Memo": ""
  },
  {
    "Transaction Date": "07/01/2022",
    "Post Date": "07/01/2022",
    "Description": "AUTOMATIC PAYMENT - THANK",
    "Category": "",
    "Type": "Payment",
    "Amount": 157.87,
    "Memo": ""
  },
  {
    "Transaction Date": "06/17/2022",
    "Post Date": "06/19/2022",
    "Description": "AMZN Mktp US*MI5659W43",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -98.03,
    "Memo": ""
  },
  {
    "Transaction Date": "06/17/2022",
    "Post Date": "06/19/2022",
    "Description": "AMZN Mktp US*ZO6B49HY3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -5.75,
    "Memo": ""
  },
  {
    "Transaction Date": "06/09/2022",
    "Post Date": "06/09/2022",
    "Description": "Amazon.com*IU7T442Z3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -368.88,
    "Memo": ""
  },
  {
    "Transaction Date": "06/01/2022",
    "Post Date": "06/01/2022",
    "Description": "AUTOMATIC PAYMENT - THANK",
    "Category": "",
    "Type": "Payment",
    "Amount": 130.13,
    "Memo": ""
  },
  {
    "Transaction Date": "05/14/2022",
    "Post Date": "05/15/2022",
    "Description": "AMZN Mktp US*1L71X9FG0",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -8.03,
    "Memo": ""
  },
  {
    "Transaction Date": "05/11/2022",
    "Post Date": "05/12/2022",
    "Description": "AMZN Mktp US*138VI4S12",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -12.71,
    "Memo": ""
  },
  {
    "Transaction Date": "05/11/2022",
    "Post Date": "05/12/2022",
    "Description": "AMZN Mktp US*130RC7270",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -26.4,
    "Memo": ""
  },
  {
    "Transaction Date": "05/11/2022",
    "Post Date": "05/12/2022",
    "Description": "AMZN Mktp US*132918S80",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -110.73,
    "Memo": ""
  },
  {
    "Transaction Date": "05/01/2022",
    "Post Date": "05/02/2022",
    "Description": "AMZN Mktp US*1Q4PS5P82",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -85.79,
    "Memo": ""
  },
  {
    "Transaction Date": "04/28/2022",
    "Post Date": "04/29/2022",
    "Description": "AMZN Mktp US*132980OE1",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -8.3,
    "Memo": ""
  },
  {
    "Transaction Date": "04/28/2022",
    "Post Date": "04/29/2022",
    "Description": "AMZN Mktp US*1Q3KX8CR2",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -36.04,
    "Memo": ""
  },
  {
    "Transaction Date": "04/01/2022",
    "Post Date": "04/01/2022",
    "Description": "AUTOMATIC PAYMENT - THANK",
    "Category": "",
    "Type": "Payment",
    "Amount": 181.97,
    "Memo": ""
  },
  {
    "Transaction Date": "03/01/2022",
    "Post Date": "03/01/2022",
    "Description": "AUTOMATIC PAYMENT - THANK",
    "Category": "",
    "Type": "Payment",
    "Amount": 61.59,
    "Memo": ""
  },
  {
    "Transaction Date": "02/09/2022",
    "Post Date": "02/10/2022",
    "Description": "AMZN Mktp US*7Q8184653",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -181.97,
    "Memo": ""
  },
  {
    "Transaction Date": "01/29/2022",
    "Post Date": "01/30/2022",
    "Description": "AMZN Mktp US*9H9OI2FR3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -61.59,
    "Memo": ""
  },
  {
    "Transaction Date": "12/24/2021",
    "Post Date": "12/24/2021",
    "Description": "Payment Thank You - Web",
    "Category": "",
    "Type": "Payment",
    "Amount": 342.32,
    "Memo": ""
  },
  {
    "Transaction Date": "12/17/2021",
    "Post Date": "12/19/2021",
    "Description": "Amazon Prime*N42RH9YW3",
    "Category": "Bills & Utilities",
    "Type": "Sale",
    "Amount": -12.99,
    "Memo": ""
  },
  {
    "Transaction Date": "12/08/2021",
    "Post Date": "12/09/2021",
    "Description": "AMZN Mktp US*ZD0O12WC3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -10.4,
    "Memo": ""
  },
  {
    "Transaction Date": "12/07/2021",
    "Post Date": "12/08/2021",
    "Description": "AMZN Mktp US*QX55R5CM3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -15.21,
    "Memo": ""
  },
  {
    "Transaction Date": "11/23/2021",
    "Post Date": "11/24/2021",
    "Description": "AMZN Mktp US*1G3DJ3VF3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -18.01,
    "Memo": ""
  },
  {
    "Transaction Date": "11/17/2021",
    "Post Date": "11/17/2021",
    "Description": "Amazon Prime*B36IZ5M33",
    "Category": "Bills & Utilities",
    "Type": "Sale",
    "Amount": -12.99,
    "Memo": ""
  },
  {
    "Transaction Date": "11/15/2021",
    "Post Date": "11/16/2021",
    "Description": "AMZN Mktp US*FS5438TJ3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -24.78,
    "Memo": ""
  },
  {
    "Transaction Date": "11/15/2021",
    "Post Date": "11/16/2021",
    "Description": "AMZN Mktp US*XG7ZY7GV3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -201.39,
    "Memo": ""
  },
  {
    "Transaction Date": "11/13/2021",
    "Post Date": "11/14/2021",
    "Description": "AMZN Mktp US*FC6E19123",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -11.33,
    "Memo": ""
  },
  {
    "Transaction Date": "11/10/2021",
    "Post Date": "11/11/2021",
    "Description": "AMZN Mktp US*CU5SH5YG3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -12.56,
    "Memo": ""
  },
  {
    "Transaction Date": "11/10/2021",
    "Post Date": "11/11/2021",
    "Description": "Amazon.com*YN8D70KR3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -13.26,
    "Memo": ""
  },
  {
    "Transaction Date": "11/10/2021",
    "Post Date": "11/11/2021",
    "Description": "AMZN Mktp US*T08KX1UJ3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -7.41,
    "Memo": ""
  },
  {
    "Transaction Date": "11/10/2021",
    "Post Date": "11/10/2021",
    "Description": "Amazon Prime*AW9T73AE3",
    "Category": "Bills & Utilities",
    "Type": "Sale",
    "Amount": -1.99,
    "Memo": ""
  },
  {
    "Transaction Date": "11/09/2021",
    "Post Date": "11/09/2021",
    "Description": "Payment Thank You - Web",
    "Category": "",
    "Type": "Payment",
    "Amount": 415.48,
    "Memo": ""
  },
  {
    "Transaction Date": "11/06/2021",
    "Post Date": "11/07/2021",
    "Description": "Amazon Prime",
    "Category": "Bills & Utilities",
    "Type": "Return",
    "Amount": 12.99,
    "Memo": ""
  },
  {
    "Transaction Date": "11/04/2021",
    "Post Date": "11/05/2021",
    "Description": "AMZN Mktp US*5M6TY5M93",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -391.14,
    "Memo": ""
  },
  {
    "Transaction Date": "11/03/2021",
    "Post Date": "11/04/2021",
    "Description": "Amazon Prime*WX1P39KD3",
    "Category": "Bills & Utilities",
    "Type": "Sale",
    "Amount": -12.99,
    "Memo": ""
  },
  {
    "Transaction Date": "11/01/2021",
    "Post Date": "11/01/2021",
    "Description": "AUTOMATIC PAYMENT - THANK",
    "Category": "",
    "Type": "Payment",
    "Amount": 100.48,
    "Memo": ""
  },
  {
    "Transaction Date": "10/05/2021",
    "Post Date": "10/05/2021",
    "Description": "Amazon.com*2C0SS4Y30",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -24.34,
    "Memo": ""
  },
  {
    "Transaction Date": "10/01/2021",
    "Post Date": "10/01/2021",
    "Description": "AUTOMATIC PAYMENT - THANK",
    "Category": "",
    "Type": "Payment",
    "Amount": 74.06,
    "Memo": ""
  },
  {
    "Transaction Date": "09/27/2021",
    "Post Date": "09/28/2021",
    "Description": "AMZN Mktp US*2C36Y5FJ2",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -52.99,
    "Memo": ""
  },
  {
    "Transaction Date": "09/16/2021",
    "Post Date": "09/17/2021",
    "Description": "AMZN Mktp US*2G3PU0SL1",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -47.49,
    "Memo": ""
  },
  {
    "Transaction Date": "08/29/2021",
    "Post Date": "08/30/2021",
    "Description": "AMZN Mktp US*251V96G41",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -26.45,
    "Memo": ""
  },
  {
    "Transaction Date": "08/15/2021",
    "Post Date": "08/16/2021",
    "Description": "AMZN Mktp US*2D79J0MC1",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -32.83,
    "Memo": ""
  },
  {
    "Transaction Date": "08/09/2021",
    "Post Date": "08/09/2021",
    "Description": "AMZN Mktp US*2P8C679U0",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -14.78,
    "Memo": ""
  },
  {
    "Transaction Date": "08/08/2021",
    "Post Date": "08/08/2021",
    "Description": "Payment Thank You - Web",
    "Category": "",
    "Type": "Payment",
    "Amount": 425.19,
    "Memo": ""
  },
  {
    "Transaction Date": "08/03/2021",
    "Post Date": "08/04/2021",
    "Description": "AMZN Mktp US*2P7B52T22",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -91.73,
    "Memo": ""
  },
  {
    "Transaction Date": "08/02/2021",
    "Post Date": "08/03/2021",
    "Description": "AMZN Mktp US*2P9AO2ZO2",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -11.06,
    "Memo": ""
  },
  {
    "Transaction Date": "08/01/2021",
    "Post Date": "08/02/2021",
    "Description": "Amazon.com*2P6PC1V31",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -116.59,
    "Memo": ""
  },
  {
    "Transaction Date": "07/20/2021",
    "Post Date": "07/21/2021",
    "Description": "AMZN Mktp US*2E0K182S1",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -14.83,
    "Memo": ""
  },
  {
    "Transaction Date": "07/16/2021",
    "Post Date": "07/18/2021",
    "Description": "AMZN Mktp US*2E7VH1VA1",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -49.79,
    "Memo": ""
  },
  {
    "Transaction Date": "07/15/2021",
    "Post Date": "07/16/2021",
    "Description": "AMZN Mktp US*2E28I4FL0",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -63.86,
    "Memo": ""
  },
  {
    "Transaction Date": "07/11/2021",
    "Post Date": "07/12/2021",
    "Description": "AMZN Mktp US*2E7A53ZT1",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -37.07,
    "Memo": ""
  },
  {
    "Transaction Date": "07/11/2021",
    "Post Date": "07/12/2021",
    "Description": "AMZN Mktp US*293GW17S0",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -40.26,
    "Memo": ""
  },
  {
    "Transaction Date": "06/20/2021",
    "Post Date": "06/20/2021",
    "Description": "Payment Thank You - Web",
    "Category": "",
    "Type": "Payment",
    "Amount": 285.13,
    "Memo": ""
  },
  {
    "Transaction Date": "06/02/2021",
    "Post Date": "06/03/2021",
    "Description": "AMZN Mktp US*2R32W4RV0",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -67.83,
    "Memo": ""
  },
  {
    "Transaction Date": "05/27/2021",
    "Post Date": "05/28/2021",
    "Description": "AMZN Mktp US*2R0ID6H00",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -10.59,
    "Memo": ""
  },
  {
    "Transaction Date": "05/18/2021",
    "Post Date": "05/19/2021",
    "Description": "Amazon.com*2L4OS1RI0",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -29.99,
    "Memo": ""
  },
  {
    "Transaction Date": "05/18/2021",
    "Post Date": "05/19/2021",
    "Description": "AMZN Mktp US*2L7B432V2",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -176.72,
    "Memo": ""
  },
  {
    "Transaction Date": "05/13/2021",
    "Post Date": "05/13/2021",
    "Description": "Payment Thank You - Web",
    "Category": "",
    "Type": "Payment",
    "Amount": 451.84,
    "Memo": ""
  },
  {
    "Transaction Date": "05/04/2021",
    "Post Date": "05/05/2021",
    "Description": "AMZN Mktp US*2L02I0AO1",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -169.59,
    "Memo": ""
  },
  {
    "Transaction Date": "05/04/2021",
    "Post Date": "05/05/2021",
    "Description": "AMZN Mktp US*B70R44DY3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -169.59,
    "Memo": ""
  },
  {
    "Transaction Date": "05/03/2021",
    "Post Date": "05/05/2021",
    "Description": "AMZN Mktp US*2L64U8JW1",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -74.51,
    "Memo": ""
  },
  {
    "Transaction Date": "04/21/2021",
    "Post Date": "04/22/2021",
    "Description": "Amazon.com*G695D7PM3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -38.15,
    "Memo": ""
  },
  {
    "Transaction Date": "04/21/2021",
    "Post Date": "04/21/2021",
    "Description": "Payment Thank You - Web",
    "Category": "",
    "Type": "Payment",
    "Amount": 302.39,
    "Memo": ""
  },
  {
    "Transaction Date": "04/19/2021",
    "Post Date": "04/20/2021",
    "Description": "Amazon Tips*ZG7NM7BS3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -7,
    "Memo": ""
  },
  {
    "Transaction Date": "04/17/2021",
    "Post Date": "04/18/2021",
    "Description": "Amazon.com*HJ5F05N73",
    "Category": "Groceries",
    "Type": "Sale",
    "Amount": -128.39,
    "Memo": ""
  },
  {
    "Transaction Date": "04/04/2021",
    "Post Date": "04/05/2021",
    "Description": "Amazon Tips*VI0P90R63",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -7,
    "Memo": ""
  },
  {
    "Transaction Date": "04/02/2021",
    "Post Date": "04/04/2021",
    "Description": "Amazon.com*SQ6TQ5L13",
    "Category": "Groceries",
    "Type": "Sale",
    "Amount": -34.43,
    "Memo": ""
  },
  {
    "Transaction Date": "04/01/2021",
    "Post Date": "04/02/2021",
    "Description": "AMZN Mktp US*J843I4MY3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -5.91,
    "Memo": ""
  },
  {
    "Transaction Date": "04/01/2021",
    "Post Date": "04/01/2021",
    "Description": "AUTOMATIC PAYMENT - THANK",
    "Category": "",
    "Type": "Payment",
    "Amount": 21.58,
    "Memo": ""
  },
  {
    "Transaction Date": "03/11/2021",
    "Post Date": "03/12/2021",
    "Description": "Amazon Tips*YV7LO8F63",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -9,
    "Memo": ""
  },
  {
    "Transaction Date": "03/09/2021",
    "Post Date": "03/10/2021",
    "Description": "Amazon.com*LV2B35E83",
    "Category": "Groceries",
    "Type": "Sale",
    "Amount": -110.66,
    "Memo": ""
  },
  {
    "Transaction Date": "02/21/2021",
    "Post Date": "02/21/2021",
    "Description": "AMZN Mktp US*IH6G65PR3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -21.58,
    "Memo": ""
  },
  {
    "Transaction Date": "02/15/2021",
    "Post Date": "02/16/2021",
    "Description": "AMZN Mktp US",
    "Category": "Shopping",
    "Type": "Return",
    "Amount": 809.82,
    "Memo": ""
  },
  {
    "Transaction Date": "02/10/2021",
    "Post Date": "02/10/2021",
    "Description": "Payment Thank You - Web",
    "Category": "",
    "Type": "Payment",
    "Amount": 513.97,
    "Memo": ""
  },
  {
    "Transaction Date": "02/09/2021",
    "Post Date": "02/10/2021",
    "Description": "AMZN Mktp US*F57DN21E3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -809.82,
    "Memo": ""
  },
  {
    "Transaction Date": "02/06/2021",
    "Post Date": "02/07/2021",
    "Description": "AMZN Mktp US*WZ2385SH3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -99.1,
    "Memo": ""
  },
  {
    "Transaction Date": "02/04/2021",
    "Post Date": "02/05/2021",
    "Description": "AMZN Mktp US*OC1WN8QC3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -28.24,
    "Memo": ""
  },
  {
    "Transaction Date": "02/04/2021",
    "Post Date": "02/05/2021",
    "Description": "AMZN Mktp US*WE3UU8OE3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -76.16,
    "Memo": ""
  },
  {
    "Transaction Date": "01/18/2021",
    "Post Date": "01/19/2021",
    "Description": "AMZN Mktp US*FD0IL3VB3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -104.94,
    "Memo": ""
  },
  {
    "Transaction Date": "01/16/2021",
    "Post Date": "01/17/2021",
    "Description": "Amazon Tips*RD28F8N03",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -7,
    "Memo": ""
  },
  {
    "Transaction Date": "01/14/2021",
    "Post Date": "01/15/2021",
    "Description": "Amazon.com*T229E7H03",
    "Category": "Groceries",
    "Type": "Sale",
    "Amount": -85.71,
    "Memo": ""
  },
  {
    "Transaction Date": "01/11/2021",
    "Post Date": "01/11/2021",
    "Description": "Amazon.com*0Y5RM7P73",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -26.49,
    "Memo": ""
  },
  {
    "Transaction Date": "01/09/2021",
    "Post Date": "01/10/2021",
    "Description": "AMZN Mktp US*XG9MV2V73",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -57.11,
    "Memo": ""
  },
  {
    "Transaction Date": "01/04/2021",
    "Post Date": "01/05/2021",
    "Description": "AMZN Mktp US*AP5KN8H63",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -29.22,
    "Memo": ""
  },
  {
    "Transaction Date": "01/01/2021",
    "Post Date": "01/01/2021",
    "Description": "Payment Thank You - Web",
    "Category": "",
    "Type": "Payment",
    "Amount": 620.39,
    "Memo": ""
  },
  {
    "Transaction Date": "11/28/2020",
    "Post Date": "11/29/2020",
    "Description": "AMZN Mktp US*G17VI3EP3",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -184.27,
    "Memo": ""
  },
  {
    "Transaction Date": "11/17/2020",
    "Post Date": "11/17/2020",
    "Description": "AMZN Mktp US*D810R5903",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -141.82,
    "Memo": ""
  },
  {
    "Transaction Date": "11/12/2020",
    "Post Date": "11/13/2020",
    "Description": "AMZN Mktp US*2850N1992",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -119.68,
    "Memo": ""
  },
  {
    "Transaction Date": "11/11/2020",
    "Post Date": "11/12/2020",
    "Description": "AMZN Mktp US*201OF3C81",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -165.09,
    "Memo": ""
  },
  {
    "Transaction Date": "11/11/2020",
    "Post Date": "11/12/2020",
    "Description": "AMZN Mktp US*2046V5OI1",
    "Category": "Shopping",
    "Type": "Sale",
    "Amount": -9.53,
    "Memo": ""
  }
]
