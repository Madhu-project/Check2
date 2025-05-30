import axios, { Method } from "axios";
import { ErrorResponse } from "./ErrorResponse";

interface RequestParams {
  url: string;
  data?: any;
}

interface MsServicesOptions {
  rejectWithValue: (value: ErrorResponse) => unknown;
  method: Method;
}

const MsServices = async (
  { url, data }: RequestParams,
  { rejectWithValue, method }: MsServicesOptions
) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    });

    return response.data;
  } catch (error: any) {
    const defaultError = {
      errorCode: "E9999",
      errorMessage: "Something went wrong",
    };

    const backendError = error.response?.data;

    return rejectWithValue({
      errorCode: backendError?.errorCode || defaultError.errorCode,
      errorMessage: backendError?.errorMessage || defaultError.errorMessage,
    });
  }
};

export default MsServices;

// import axios, { Method } from "axios";

// interface RequestParams {
//   url: string;
//   data?: any; // optional data
// }

// interface MsServicesOptions {
//   rejectWithValue: Function;
//   method: Method;
// }

// const MsServices = async (
//   { url, data }: RequestParams,
//   { rejectWithValue, method }: MsServicesOptions
// ) => {
//   try {
//     const config = {
//       method,
//       url,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "*/*",
//       },
//     } as any;

//     if (data) {
//       config.data = data;
//     }

//     const response = await axios(config);

//     return response.data;
//   } catch (error: any) {
//     let message = "";

//     if (error.response) {
//       message = error.response.data?.message || "Server error occurred";
//     } else if (error.request) {
//       message = "No response from server";
//     } else {
//       message = error.message;
//     }

//     return rejectWithValue(message);
//   }
// };

// export default MsServices;

// // // src/api/rmbServices.ts
// // import axios, { Method } from "axios";
// // import { AxiosError } from "axios";

// // interface ServiceParams {
// //   url: string;
// //   data?: any;
// // }

// // interface ExtraParams {
// //   rejectWithValue: (value: string) => unknown;
// //   method: Method;
// // }

// // const MsServices = async (
// //   { url, data }: ServiceParams,
// //   { rejectWithValue, method }: ExtraParams
// // ): Promise<any> => {
// //   try {
// //     const response = await axios({
// //       method,
// //       url,
// //       data,
// //       headers: {
// //         "Content-Type": "application/json",
// //         Accept: "*/*",
// //       },
// //     });

// //     return response.data;
// //   } catch (err) {
// //     const error = err as AxiosError;
// //     let message: string;

// //     if (error.response) {
// //       message =
// //         (error.response.data as { message?: string })?.message ||
// //         "Server error occurred";
// //     } else if (error.request) {
// //       message = "No response from server";
// //     } else {
// //       message = error.message;
// //     }

// //     return rejectWithValue(message);
// //   }
// // };

// // export default MsServices;
