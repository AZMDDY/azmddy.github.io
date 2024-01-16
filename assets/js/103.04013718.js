(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{594:function(t,e,v){"use strict";v.r(e);var s=v(22),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"xshell-script-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xshell-script-api"}},[t._v("#")]),t._v(" xshell script api")]),t._v(" "),v("blockquote",[v("p",[t._v("Xshell 支持使用 VB,JS,Python 脚本去启动自动化任务。这里介绍一下 xshell 提供的 API。")])]),t._v(" "),v("h2",{attrs:{id:"xsh-seesion"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xsh-seesion"}},[t._v("#")]),t._v(" xsh.Seesion")]),t._v(" "),v("p",[t._v("The following functions and variables can be used in "),v("strong",[t._v("Xshell")]),t._v(" sessions. To use these functions and variables, execute them together with xsh.Session. For example, to use 'Sleep()' function, use 'xsh.Session.Sleep(1000)'.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("Return Value")])]),t._v(" "),v("th",[v("strong",[t._v("Function")])]),t._v(" "),v("th",[v("strong",[t._v("Parameter")])]),t._v(" "),v("th",[v("strong",[t._v("Description")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Void")]),t._v(" "),v("td",[v("strong",[t._v("Open")]),t._v("(LPCTSTR lpszSession)")]),t._v(" "),v("td",[t._v("lpszSession A character string of an Xshell session path or URL format of Xshell.")]),t._v(" "),v("td",[t._v("Open a new session or URL. To open a session, place /s option in front of a character string. Ex.) To open the A.xsh session, use '/s $PATH/A.xsh'.")])]),t._v(" "),v("tr",[v("td",[t._v("Void")]),t._v(" "),v("td",[v("strong",[t._v("Close")]),t._v("()")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Close the currently connected session.")])]),t._v(" "),v("tr",[v("td",[t._v("Void")]),t._v(" "),v("td",[v("strong",[t._v("Sleep")]),t._v("(long timeout)")]),t._v(" "),v("td",[t._v("Timeout Milisecond unit time value.")]),t._v(" "),v("td",[t._v("Make Xshell wait for the designated time.")])]),t._v(" "),v("tr",[v("td",[t._v("Void")]),t._v(" "),v("td",[v("strong",[t._v("LogFilePath")]),t._v("(LPCTSTR lpszNewFilePath)")]),t._v(" "),v("td",[t._v("lpszNewFilePath File name including path")]),t._v(" "),v("td",[t._v("Designate log file.")])]),t._v(" "),v("tr",[v("td",[t._v("void")]),t._v(" "),v("td",[v("strong",[t._v("StartLog")]),t._v("()")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Start logging for a session. Log is designated with a path specified in LogFilePath(). If a log file path is not designated, the default path is used.")])]),t._v(" "),v("tr",[v("td",[t._v("void")]),t._v(" "),v("td",[v("strong",[t._v("StopLog")]),t._v("()")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Stop logging.")])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("Name")])]),t._v(" "),v("th",[v("strong",[t._v("Type")])]),t._v(" "),v("th",[v("strong",[t._v("Description")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Connected")]),t._v(" "),v("td",[t._v("BOOL")]),t._v(" "),v("td",[t._v("Check whether current session is connected.")])]),t._v(" "),v("tr",[v("td",[t._v("LocalAddress")]),t._v(" "),v("td",[t._v("BSTR")]),t._v(" "),v("td",[t._v("Retrieve the local address.")])]),t._v(" "),v("tr",[v("td",[t._v("Path")]),t._v(" "),v("td",[t._v("BSTR")]),t._v(" "),v("td",[t._v("Retrieve the current session file path.")])]),t._v(" "),v("tr",[v("td",[t._v("RemoteAddress")]),t._v(" "),v("td",[t._v("BSTR")]),t._v(" "),v("td",[t._v("Retrieve the remote address.")])]),t._v(" "),v("tr",[v("td",[t._v("RemotePort")]),t._v(" "),v("td",[t._v("long")]),t._v(" "),v("td",[t._v("Retrieve the remote port.")])]),t._v(" "),v("tr",[v("td",[t._v("Logging")]),t._v(" "),v("td",[t._v("BOOL")]),t._v(" "),v("td",[t._v("Check whether current session is recording log file.")])]),t._v(" "),v("tr",[v("td",[t._v("LogFilePath")]),t._v(" "),v("td",[t._v("BSTR")]),t._v(" "),v("td",[t._v("Save as a log file.")])])])]),t._v(" "),v("h2",{attrs:{id:"xsh-screen"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xsh-screen"}},[t._v("#")]),t._v(" xsh.Screen")]),t._v(" "),v("p",[t._v("The following functions and variables can be used when handling of the "),v("strong",[t._v("Xshell")]),t._v(" terminal screen. To use these functions and variables, execute them together with the xsh.Screen. For example, to use 'Clear()' function, use 'xsh.Session.Clear()'.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("Return Value")])]),t._v(" "),v("th",[v("strong",[t._v("Function")])]),t._v(" "),v("th",[v("strong",[t._v("Parameter")])]),t._v(" "),v("th",[v("strong",[t._v("Description")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("void")]),t._v(" "),v("td",[v("strong",[t._v("Clear")]),t._v("()")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("Clear terminal screen.")])]),t._v(" "),v("tr",[v("td",[t._v("void")]),t._v(" "),v("td",[v("strong",[t._v("Send")]),t._v("(LPCTSTR lpszStrToSend)")]),t._v(" "),v("td",[t._v("lpszStrToSend Character string to send")]),t._v(" "),v("td",[t._v("Send message to terminal.")])]),t._v(" "),v("tr",[v("td",[t._v("BSTR")]),t._v(" "),v("td",[v("strong",[t._v("Get")]),t._v("(long nBegRow, long nBegCol, long nEndRow, long nEndCol)")]),t._v(" "),v("td",[t._v("nBegRow Terminal row starting position nBegCol Terminal column starting position nEndRow Terminal row ending position nEndCol Terminal column ending position")]),t._v(" "),v("td",[t._v("Read the character string in the specified terminal section and return the value.")])]),t._v(" "),v("tr",[v("td",[t._v("void")]),t._v(" "),v("td",[v("strong",[t._v("WaitForString")]),t._v("(LPCTSTR lpszString)")]),t._v(" "),v("td",[t._v("lpszString Character string to be displayed on the terminal.")]),t._v(" "),v("td",[t._v("Wait for message.")])]),t._v(" "),v("tr",[v("td",[t._v("Long")]),t._v(" "),v("td",[v("strong",[t._v("WaitForStrings")]),t._v("(VARIANT FAR* strArray, long nTimeout)")]),t._v(" "),v("td",[t._v("strArray Character string to be displayed on the terminal nTimeout Wait time millisecond value "),v("em",[t._v("Return Value")]),t._v(" The number of found strings.")]),t._v(" "),v("td",[t._v("Wait for message until timeout.")])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("Name")])]),t._v(" "),v("th",[v("strong",[t._v("Type")])]),t._v(" "),v("th",[v("strong",[t._v("Description")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("CurrentColumn")]),t._v(" "),v("td",[t._v("long")]),t._v(" "),v("td",[t._v("Return the current column.")])]),t._v(" "),v("tr",[v("td",[t._v("CurrentRow")]),t._v(" "),v("td",[t._v("long")]),t._v(" "),v("td",[t._v("Return the current row.")])]),t._v(" "),v("tr",[v("td",[t._v("Columns")]),t._v(" "),v("td",[t._v("long")]),t._v(" "),v("td",[t._v("Retrieve the total columns same as terminal width.")])]),t._v(" "),v("tr",[v("td",[t._v("Rows")]),t._v(" "),v("td",[t._v("long")]),t._v(" "),v("td",[t._v("Retrieves the total row same as terminal lines")])]),t._v(" "),v("tr",[v("td",[t._v("Synchronous")]),t._v(" "),v("td",[t._v("BOOL")]),t._v(" "),v("td",[t._v("Set screen synchronization (True means synchronize and false means do not synchronize)")])])])]),t._v(" "),v("h2",{attrs:{id:"xsh-dialog"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xsh-dialog"}},[t._v("#")]),t._v(" xsh.Dialog")]),t._v(" "),v("p",[t._v("You can use this to manipulate the Xshell terminal screen. To use the following function and variable, execute it with xsh.Dialog. For example, if you want to use the MsgBox() function, append xsh.Dialog.MsgBox() in the front like this: xsh.Dialog.MsgBox().")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("Return Value")])]),t._v(" "),v("th",[v("strong",[t._v("Function")])]),t._v(" "),v("th",[v("strong",[t._v("Parameter")])]),t._v(" "),v("th",[v("strong",[t._v("Description")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Long")]),t._v(" "),v("td",[v("strong",[t._v("MsgBox")]),t._v("(LPCTSTR lpszMsg)")]),t._v(" "),v("td",[v("em",[t._v("LpszMsg")]),t._v(":"),v("br"),t._v(" String you want to send.")]),t._v(" "),v("td",[t._v("Open a message box.")])]),t._v(" "),v("tr",[v("td",[t._v("string")]),t._v(" "),v("td",[v("strong",[t._v("Prompt")]),t._v("(LPCTSTR lpszMessage, LPCTSTR lpszTitle, LPCTSTR lpszDefault, BOOL bHidden)")]),t._v(" "),v("td",[v("em",[t._v("lpszMessage")]),t._v(":"),v("br"),t._v(" The string to be displayed in the Prompt Dialog Box"),v("br"),v("em",[t._v("lpszTitle:")]),t._v(" "),v("br"),t._v("The string to be displayed in the title bar of the Prompt Dialog Box"),v("br"),v("em",[t._v("lpszDefault:")]),t._v(" "),v("br"),t._v("Initial default string of Prompt Dialog Box input box"),v("br"),v("em",[t._v("bHidden:")]),v("br"),t._v(" If set to True, input will be hidden (e.g. "),v("strong",[t._v("*")]),t._v(")")]),t._v(" "),v("td",[t._v("Description:"),v("br"),t._v("Returns user’s input from Prompt Dialog Box"),v("br"),t._v("Return Values:"),v("br"),t._v("User’s input from Prompt Dialog Box")])]),t._v(" "),v("tr",[v("td",[t._v("int")]),t._v(" "),v("td",[v("strong",[t._v("MessageBox")]),t._v("(LPCTSTR lpszMessage, LPCTSTR lpszTitle, int nType)")]),t._v(" "),v("td",[v("em",[t._v("lpszMessage:")]),t._v(" "),v("br"),t._v("The string to be displayed in the Message Box"),v("br"),v("em",[t._v("lpszTitle")]),t._v(":"),v("br"),t._v(" The string to be displayed in the title bar of the Message Box"),v("br"),v("em",[t._v("nType:")]),v("br"),t._v("Dictates button types. Refer to the table below")]),t._v(" "),v("td",[t._v("Description:"),v("br"),t._v("Displays a message box with a variety of buttons and return values depending on the user’s button selection"),v("br"),t._v("Return Values:"),v("br"),t._v("Refer to the nType parameter description below")])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("nType")]),t._v(" "),v("th",[t._v("Button")]),t._v(" "),v("th",[t._v("Return Value")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("0")]),t._v(" "),v("td",[t._v("OK")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("OK / Cancel")]),t._v(" "),v("td",[t._v("1 / 2")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("Abort / Retry / Ignore")]),t._v(" "),v("td",[t._v("3 / 4 / 5")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("Yes / No / Cancel")]),t._v(" "),v("td",[t._v("6 / 7 / 2")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("Yes / No")]),t._v(" "),v("td",[t._v("6 / 7")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("Retry / Cancel")]),t._v(" "),v("td",[t._v("4 / 2")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("Cancel / TryAgain / Continue")]),t._v(" "),v("td",[t._v("2 / 10 / 11")])])])]),t._v(" "),v("p",[t._v("xshell 官网原文："),v("a",{attrs:{href:"https://netsarang.atlassian.net/wiki/spaces/ENSUP/pages/419957269/Script+API",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://netsarang.atlassian.net/wiki/spaces/ENSUP/pages/419957269/Script+API"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("由于直接通过这些 API 去开发 Xshell 的 python 脚本，可能由于拼写等原因，不能顺畅的开发，所以我将官方的 API 打包，用 python 写了一个同名的 xsh 包，API 接口和官方完全一致，并提供详细的注释，通过这个包，可以大大提供开发效率，在使用时，也仅仅只需要注释掉导入包的语句即可。")]),t._v(" "),v("p",[t._v("项目地址："),v("a",{attrs:{href:"https://github.com/AZMDDY/xshapi",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/AZMDDY/xshapi"),v("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);