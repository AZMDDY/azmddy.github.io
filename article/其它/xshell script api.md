# xshell script api

> Xshell支持使用VB,JS,Python脚本去启动自动化任务。这里介绍一下xshell提供的API。

## xsh.Seesion

The following functions and variables can be used in **Xshell** sessions. To use these functions and variables, execute them together with xsh.Session. For example, to use 'Sleep()' function, use 'xsh.Session.Sleep(1000)'.

| **Return Value** | **Function**                             | **Parameter**                                                | **Description**                                              |
| ---------------- | ---------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Void             | **Open**(LPCTSTR lpszSession)            | lpszSession A character string of an Xshell session path or URL format of Xshell. | Open a new session or URL. To open a session, place /s option in front of a character string. Ex.) To open the A.xsh session, use '/s $PATH/A.xsh'. |
| Void             | **Close**()                              |                                                              | Close the currently connected session.                       |
| Void             | **Sleep**(long timeout)                  | Timeout Milisecond unit time value.                          | Make Xshell wait for the designated time.                    |
| Void             | **LogFilePath**(LPCTSTR lpszNewFilePath) | lpszNewFilePath File name including path                     | Designate log file.                                          |
| void             | **StartLog**()                           |                                                              | Start logging for a session. Log is designated with a path specified in LogFilePath(). If a log file path is not designated, the default path is used. |
| void             | **StopLog**()                            |                                                              | Stop logging.                                                |

| **Name**      | **Type** | **Description**                                      |
| ------------- | -------- | ---------------------------------------------------- |
| Connected     | BOOL     | Check whether current session is connected.          |
| LocalAddress  | BSTR     | Retrieve the local address.                          |
| Path          | BSTR     | Retrieve the current session file path.              |
| RemoteAddress | BSTR     | Retrieve the remote address.                         |
| RemotePort    | long     | Retrieve the remote port.                            |
| Logging       | BOOL     | Check whether current session is recording log file. |
| LogFilePath   | BSTR     | Save as a log file.                                  |

## xsh.Screen

The following functions and variables can be used when handling of the **Xshell** terminal screen. To use these functions and variables, execute them together with the xsh.Screen. For example, to use 'Clear()' function, use 'xsh.Session.Clear()'.

| **Return Value** | **Function**                                                 | **Parameter**                                                | **Description**                                              |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| void             | **Clear**()                                                  |                                                              | Clear terminal screen.                                       |
| void             | **Send**(LPCTSTR lpszStrToSend)                              | lpszStrToSend Character string to send                       | Send message to terminal.                                    |
| BSTR             | **Get**(long nBegRow, long nBegCol, long nEndRow, long nEndCol) | nBegRow Terminal row starting position nBegCol Terminal column starting position nEndRow Terminal row ending position nEndCol Terminal column ending position | Read the character string in the specified terminal section and return the value. |
| void             | **WaitForString**(LPCTSTR lpszString)                        | lpszString Character string to be displayed on the terminal. | Wait for message.                                            |
| Long             | **WaitForStrings**(VARIANT FAR* strArray, long nTimeout)     | strArray Character string to be displayed on the terminal nTimeout Wait time millisecond value *Return Value* The number of found strings. | Wait for message until timeout.                              |

| **Name**      | **Type** | **Description**                                              |
| ------------- | -------- | ------------------------------------------------------------ |
| CurrentColumn | long     | Return the current column.                                   |
| CurrentRow    | long     | Return the current row.                                      |
| Columns       | long     | Retrieve the total columns same as terminal width.           |
| Rows          | long     | Retrieves the total row same as terminal lines               |
| Synchronous   | BOOL     | Set screen synchronization (True means synchronize and false means do not  synchronize) |

## xsh.Dialog

You can use this to manipulate the Xshell terminal screen. To use the following function and variable, execute it with xsh.Dialog. For example, if you want to use the MsgBox() function, append xsh.Dialog.MsgBox() in the front like this: xsh.Dialog.MsgBox().

| **Return Value** | **Function**                                                 | **Parameter**                                                | **Description**                                              |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Long             | **MsgBox**(LPCTSTR lpszMsg)                                  | *LpszMsg*:<br/> String you want to send.                     | Open a message box.                                          |
| string           | **Prompt**(LPCTSTR lpszMessage, LPCTSTR lpszTitle, LPCTSTR lpszDefault, BOOL bHidden) | *lpszMessage*:<br/> The string to be displayed in the Prompt Dialog Box<br/>*lpszTitle:* <br/>The string to be displayed in the title bar of the Prompt Dialog Box<br/>*lpszDefault:* <br/>Initial default string of Prompt Dialog Box input box<br/>*bHidden:*<br/> If set to True, input will be hidden (e.g. *****) | Description:<br/>Returns user’s input from Prompt Dialog Box<br/>Return Values:<br/>User’s input from Prompt Dialog Box |
| int              | **MessageBox**(LPCTSTR lpszMessage, LPCTSTR lpszTitle, int nType) | *lpszMessage:* <br/>The string to be displayed in the Message Box<br/>*lpszTitle*:<br/> The string to be displayed in the title bar of the Message Box<br/>*nType:*<br/>Dictates button types. Refer to the table below | Description:<br/>Displays a message box with a variety of buttons and return values depending on the user’s button selection<br/>Return Values:<br/>Refer to the nType parameter description below |

| nType | Button                       | Return Value |
| ----- | ---------------------------- | ------------ |
| 0     | OK                           | 1            |
| 1     | OK / Cancel                  | 1 / 2        |
| 2     | Abort / Retry / Ignore       | 3 / 4 / 5    |
| 3     | Yes / No / Cancel            | 6 / 7 / 2    |
| 4     | Yes / No                     | 6 / 7        |
| 5     | Retry / Cancel               | 4 / 2        |
| 6     | Cancel / TryAgain / Continue | 2 / 10 / 11  |

xshell官网原文：[https://netsarang.atlassian.net/wiki/spaces/ENSUP/pages/419957269/Script+API](https://netsarang.atlassian.net/wiki/spaces/ENSUP/pages/419957269/Script+API)

由于直接通过这些API去开发Xshell的python脚本，可能由于拼写等原因，不能顺畅的开发，所以我将官方的API打包，用python写了一个同名的xsh包，API接口和官方完全一致，并提供详细的注释，通过这个包，可以大大提供开发效率，在使用时，也仅仅只需要注释掉导入包的语句即可。

项目地址：[https://github.com/AZMDDY/xshapi](https://github.com/AZMDDY/xshapi)

