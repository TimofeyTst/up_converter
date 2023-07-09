import { splitApi as api } from './splitApi';
export const addTagTypes = ['ports', 'speeds', 'devices', 'connections', 'configs', 'attempts'] as const;
const injectedRtkApi = api
    .enhanceEndpoints({
        addTagTypes,
    })
    .injectEndpoints({
        endpoints: (build) => ({
            getPortsPortsGet: build.query<GetPortsPortsGetApiResponse, GetPortsPortsGetApiArg>({
                query: (queryArg) => ({ url: `/ports/`, params: { skip: queryArg.skip, limit: queryArg.limit } }),
                providesTags: ['ports'],
            }),
            getSpeedsSpeedsGet: build.query<GetSpeedsSpeedsGetApiResponse, GetSpeedsSpeedsGetApiArg>({
                query: (queryArg) => ({ url: `/speeds/`, params: { skip: queryArg.skip, limit: queryArg.limit } }),
                providesTags: ['speeds'],
            }),
            getDeviceTypesDevicesTypesGet: build.query<
                GetDeviceTypesDevicesTypesGetApiResponse,
                GetDeviceTypesDevicesTypesGetApiArg
            >({
                query: (queryArg) => ({
                    url: `/devices/types`,
                    params: { skip: queryArg.skip, limit: queryArg.limit },
                }),
                providesTags: ['devices'],
            }),
            getDeviceModelsDevicesModelsGet: build.query<
                GetDeviceModelsDevicesModelsGetApiResponse,
                GetDeviceModelsDevicesModelsGetApiArg
            >({
                query: (queryArg) => ({
                    url: `/devices/models`,
                    params: { skip: queryArg.skip, limit: queryArg.limit },
                }),
                providesTags: ['devices'],
            }),
            getDeviceStatesDevicesStatesGet: build.query<
                GetDeviceStatesDevicesStatesGetApiResponse,
                GetDeviceStatesDevicesStatesGetApiArg
            >({
                query: (queryArg) => ({
                    url: `/devices/states`,
                    params: { skip: queryArg.skip, limit: queryArg.limit },
                }),
                providesTags: ['devices'],
            }),
            getDeviceAdditionalStatesDevicesAdditionalStatesGet: build.query<
                GetDeviceAdditionalStatesDevicesAdditionalStatesGetApiResponse,
                GetDeviceAdditionalStatesDevicesAdditionalStatesGetApiArg
            >({
                query: (queryArg) => ({
                    url: `/devices/additional_states`,
                    params: { skip: queryArg.skip, limit: queryArg.limit },
                }),
                providesTags: ['devices'],
            }),
            getDeviceChannelsDevicesChannelsGet: build.query<
                GetDeviceChannelsDevicesChannelsGetApiResponse,
                GetDeviceChannelsDevicesChannelsGetApiArg
            >({
                query: (queryArg) => ({
                    url: `/devices/channels`,
                    params: { skip: queryArg.skip, limit: queryArg.limit },
                }),
                providesTags: ['devices'],
            }),
            getDevicesByTypeDevicesByTypeGet: build.query<
                GetDevicesByTypeDevicesByTypeGetApiResponse,
                GetDevicesByTypeDevicesByTypeGetApiArg
            >({
                query: (queryArg) => ({
                    url: `/devices/by_type`,
                    params: { type_name: queryArg.typeName, skip: queryArg.skip, limit: queryArg.limit },
                }),
                providesTags: ['devices'],
            }),
            getDevicesByTypesDevicesByTypesGet: build.query<
                GetDevicesByTypesDevicesByTypesGetApiResponse,
                GetDevicesByTypesDevicesByTypesGetApiArg
            >({
                query: (queryArg) => ({
                    url: `/devices/by_types`,
                    params: { type_names: queryArg.typeNames, skip: queryArg.skip, limit: queryArg.limit },
                }),
                providesTags: ['devices'],
            }),
            getDevicesByTypesRelatedDevicesByTypesRelatedGet: build.query<
                GetDevicesByTypesRelatedDevicesByTypesRelatedGetApiResponse,
                GetDevicesByTypesRelatedDevicesByTypesRelatedGetApiArg
            >({
                query: (queryArg) => ({
                    url: `/devices/by_types_related`,
                    params: { type_names: queryArg.typeNames, skip: queryArg.skip, limit: queryArg.limit },
                }),
                providesTags: ['devices'],
            }),
            getDeviceDevicesDeviceIdGet: build.query<
                GetDeviceDevicesDeviceIdGetApiResponse,
                GetDeviceDevicesDeviceIdGetApiArg
            >({
                query: (queryArg) => ({ url: `/devices/${queryArg.deviceId}` }),
                providesTags: ['devices'],
            }),
            updateExistingDeviceDevicesDeviceIdPut: build.mutation<
                UpdateExistingDeviceDevicesDeviceIdPutApiResponse,
                UpdateExistingDeviceDevicesDeviceIdPutApiArg
            >({
                query: (queryArg) => ({
                    url: `/devices/${queryArg.deviceId}`,
                    method: 'PUT',
                    body: queryArg.deviceRelatedCreate,
                }),
                invalidatesTags: ['devices'],
            }),
            deleteExistingDeviceDevicesDeviceIdDelete: build.mutation<
                DeleteExistingDeviceDevicesDeviceIdDeleteApiResponse,
                DeleteExistingDeviceDevicesDeviceIdDeleteApiArg
            >({
                query: (queryArg) => ({ url: `/devices/${queryArg.deviceId}`, method: 'DELETE' }),
                invalidatesTags: ['devices'],
            }),
            createNewDeviceDevicesPost: build.mutation<
                CreateNewDeviceDevicesPostApiResponse,
                CreateNewDeviceDevicesPostApiArg
            >({
                query: (queryArg) => ({ url: `/devices/`, method: 'POST', body: queryArg.deviceRelatedCreate }),
                invalidatesTags: ['devices'],
            }),
            updateExistingConnectionConnectionsConnectionsConnectionIdPut: build.mutation<
                UpdateExistingConnectionConnectionsConnectionsConnectionIdPutApiResponse,
                UpdateExistingConnectionConnectionsConnectionsConnectionIdPutApiArg
            >({
                query: (queryArg) => ({
                    url: `/connections/connections/${queryArg.connectionId}`,
                    method: 'PUT',
                    body: queryArg.srcConnectionModelsConnectionCreate,
                }),
                invalidatesTags: ['connections'],
            }),
            deleteExistingConnectionConnectionsConnectionsConnectionIdDelete: build.mutation<
                DeleteExistingConnectionConnectionsConnectionsConnectionIdDeleteApiResponse,
                DeleteExistingConnectionConnectionsConnectionsConnectionIdDeleteApiArg
            >({
                query: (queryArg) => ({ url: `/connections/connections/${queryArg.connectionId}`, method: 'DELETE' }),
                invalidatesTags: ['connections'],
            }),
            getConfigsConfigsGet: build.query<GetConfigsConfigsGetApiResponse, GetConfigsConfigsGetApiArg>({
                query: () => ({ url: `/configs/` }),
                providesTags: ['configs'],
            }),
            createNewConfigConfigsPost: build.mutation<
                CreateNewConfigConfigsPostApiResponse,
                CreateNewConfigConfigsPostApiArg
            >({
                query: (queryArg) => ({ url: `/configs/`, method: 'POST', body: queryArg.configurationCreate }),
                invalidatesTags: ['configs'],
            }),
            getConfigConfigsConfigIdGet: build.query<
                GetConfigConfigsConfigIdGetApiResponse,
                GetConfigConfigsConfigIdGetApiArg
            >({
                query: (queryArg) => ({ url: `/configs/${queryArg.configId}` }),
                providesTags: ['configs'],
            }),
            updateExistingConfigConfigsConfigIdPut: build.mutation<
                UpdateExistingConfigConfigsConfigIdPutApiResponse,
                UpdateExistingConfigConfigsConfigIdPutApiArg
            >({
                query: (queryArg) => ({
                    url: `/configs/${queryArg.configId}`,
                    method: 'PUT',
                    body: queryArg.connectionsTyped,
                }),
                invalidatesTags: ['configs'],
            }),
            deleteExistingConfigConfigsConfigIdDelete: build.mutation<
                DeleteExistingConfigConfigsConfigIdDeleteApiResponse,
                DeleteExistingConfigConfigsConfigIdDeleteApiArg
            >({
                query: (queryArg) => ({ url: `/configs/${queryArg.configId}`, method: 'DELETE' }),
                invalidatesTags: ['configs'],
            }),
            getConfigConnectionsConfigsConfigIdConnectionsGet: build.query<
                GetConfigConnectionsConfigsConfigIdConnectionsGetApiResponse,
                GetConfigConnectionsConfigsConfigIdConnectionsGetApiArg
            >({
                query: (queryArg) => ({ url: `/configs/${queryArg.configId}/connections` }),
                providesTags: ['configs'],
            }),
            createNewConnectionConfigsConfigIdConnectionsPost: build.mutation<
                CreateNewConnectionConfigsConfigIdConnectionsPostApiResponse,
                CreateNewConnectionConfigsConfigIdConnectionsPostApiArg
            >({
                query: (queryArg) => ({
                    url: `/configs/${queryArg.configId}/connections`,
                    method: 'POST',
                    body: queryArg.srcConfigurationModelsConnectionCreate,
                }),
                invalidatesTags: ['configs'],
            }),
            getConfigCalsConfigsConfigIdCalsGet: build.query<
                GetConfigCalsConfigsConfigIdCalsGetApiResponse,
                GetConfigCalsConfigsConfigIdCalsGetApiArg
            >({
                query: (queryArg) => ({ url: `/configs/${queryArg.configId}/cals` }),
                providesTags: ['configs'],
            }),
            getConfigUpconvConfigsConfigIdUpconvertersGet: build.query<
                GetConfigUpconvConfigsConfigIdUpconvertersGetApiResponse,
                GetConfigUpconvConfigsConfigIdUpconvertersGetApiArg
            >({
                query: (queryArg) => ({ url: `/configs/${queryArg.configId}/upconverters` }),
                providesTags: ['configs'],
            }),
            getAttemptsAttemptsGet: build.query<GetAttemptsAttemptsGetApiResponse, GetAttemptsAttemptsGetApiArg>({
                query: (queryArg) => ({ url: `/attempts/`, params: { skip: queryArg.skip, limit: queryArg.limit } }),
                providesTags: ['attempts'],
            }),
            createNewAttemptAttemptsPost: build.mutation<
                CreateNewAttemptAttemptsPostApiResponse,
                CreateNewAttemptAttemptsPostApiArg
            >({
                query: (queryArg) => ({ url: `/attempts/`, method: 'POST', body: queryArg.attemptRelatedCreate }),
                invalidatesTags: ['attempts'],
            }),
            getLastAttemptAttemptsLastGet: build.query<
                GetLastAttemptAttemptsLastGetApiResponse,
                GetLastAttemptAttemptsLastGetApiArg
            >({
                query: () => ({ url: `/attempts/last` }),
                providesTags: ['attempts'],
            }),
            getLastSuccessAttemptAttemptsLastSuccessGet: build.query<
                GetLastSuccessAttemptAttemptsLastSuccessGetApiResponse,
                GetLastSuccessAttemptAttemptsLastSuccessGetApiArg
            >({
                query: () => ({ url: `/attempts/last_success` }),
                providesTags: ['attempts'],
            }),
            updateExistingAttemptAttemptsAttemptIdPut: build.mutation<
                UpdateExistingAttemptAttemptsAttemptIdPutApiResponse,
                UpdateExistingAttemptAttemptsAttemptIdPutApiArg
            >({
                query: (queryArg) => ({
                    url: `/attempts/${queryArg.attemptId}`,
                    method: 'PUT',
                    body: queryArg.attemptCreate,
                }),
                invalidatesTags: ['attempts'],
            }),
            deleteExistingAttemptAttemptsAttemptIdDelete: build.mutation<
                DeleteExistingAttemptAttemptsAttemptIdDeleteApiResponse,
                DeleteExistingAttemptAttemptsAttemptIdDeleteApiArg
            >({
                query: (queryArg) => ({ url: `/attempts/${queryArg.attemptId}`, method: 'DELETE' }),
                invalidatesTags: ['attempts'],
            }),
        }),
        overrideExisting: false,
    });
export { injectedRtkApi as TSTApi };
export type GetPortsPortsGetApiResponse = /** status 200 Successful Response */ Port[];
export type GetPortsPortsGetApiArg = {
    skip?: number;
    limit?: number;
};
export type GetSpeedsSpeedsGetApiResponse = /** status 200 Successful Response */ Speed[];
export type GetSpeedsSpeedsGetApiArg = {
    skip?: number;
    limit?: number;
};
export type GetDeviceTypesDevicesTypesGetApiResponse = /** status 200 Successful Response */ DeviceType[];
export type GetDeviceTypesDevicesTypesGetApiArg = {
    skip?: number;
    limit?: number;
};
export type GetDeviceModelsDevicesModelsGetApiResponse = /** status 200 Successful Response */ DeviceModel[];
export type GetDeviceModelsDevicesModelsGetApiArg = {
    skip?: number;
    limit?: number;
};
export type GetDeviceStatesDevicesStatesGetApiResponse = /** status 200 Successful Response */ DeviceState[];
export type GetDeviceStatesDevicesStatesGetApiArg = {
    skip?: number;
    limit?: number;
};
export type GetDeviceAdditionalStatesDevicesAdditionalStatesGetApiResponse =
    /** status 200 Successful Response */ DeviceAdditionalState[];
export type GetDeviceAdditionalStatesDevicesAdditionalStatesGetApiArg = {
    skip?: number;
    limit?: number;
};
export type GetDeviceChannelsDevicesChannelsGetApiResponse = /** status 200 Successful Response */ DeviceChannel[];
export type GetDeviceChannelsDevicesChannelsGetApiArg = {
    skip?: number;
    limit?: number;
};
export type GetDevicesByTypeDevicesByTypeGetApiResponse = /** status 200 Successful Response */ Device[];
export type GetDevicesByTypeDevicesByTypeGetApiArg = {
    typeName: string;
    skip?: number;
    limit?: number;
};
export type GetDevicesByTypesDevicesByTypesGetApiResponse = /** status 200 Successful Response */ Device[];
export type GetDevicesByTypesDevicesByTypesGetApiArg = {
    typeNames: string[];
    skip?: number;
    limit?: number;
};
export type GetDevicesByTypesRelatedDevicesByTypesRelatedGetApiResponse =
    /** status 200 Successful Response */ DeviceRelated[];
export type GetDevicesByTypesRelatedDevicesByTypesRelatedGetApiArg = {
    typeNames: string[];
    skip?: number;
    limit?: number;
};
export type GetDeviceDevicesDeviceIdGetApiResponse = /** status 200 Successful Response */ DeviceRelated;
export type GetDeviceDevicesDeviceIdGetApiArg = {
    deviceId: number;
};
export type UpdateExistingDeviceDevicesDeviceIdPutApiResponse = /** status 200 Successful Response */ Device;
export type UpdateExistingDeviceDevicesDeviceIdPutApiArg = {
    deviceId: number;
    deviceRelatedCreate: DeviceRelatedCreate;
};
export type DeleteExistingDeviceDevicesDeviceIdDeleteApiResponse = /** status 200 Successful Response */ any;
export type DeleteExistingDeviceDevicesDeviceIdDeleteApiArg = {
    deviceId: number;
};
export type CreateNewDeviceDevicesPostApiResponse = /** status 200 Successful Response */ Device;
export type CreateNewDeviceDevicesPostApiArg = {
    deviceRelatedCreate: DeviceRelatedCreate;
};
export type UpdateExistingConnectionConnectionsConnectionsConnectionIdPutApiResponse =
    /** status 200 Successful Response */ Connection;
export type UpdateExistingConnectionConnectionsConnectionsConnectionIdPutApiArg = {
    connectionId: number;
    srcConnectionModelsConnectionCreate: ConnectionCreate;
};
export type DeleteExistingConnectionConnectionsConnectionsConnectionIdDeleteApiResponse =
    /** status 200 Successful Response */ any;
export type DeleteExistingConnectionConnectionsConnectionsConnectionIdDeleteApiArg = {
    connectionId: number;
};
export type GetConfigsConfigsGetApiResponse = /** status 200 Successful Response */ Configuration[];
export type GetConfigsConfigsGetApiArg = void;
export type CreateNewConfigConfigsPostApiResponse = /** status 200 Successful Response */ Configuration;
export type CreateNewConfigConfigsPostApiArg = {
    configurationCreate: ConfigurationCreate;
};
export type GetConfigConfigsConfigIdGetApiResponse = /** status 200 Successful Response */ Configuration;
export type GetConfigConfigsConfigIdGetApiArg = {
    configId: number;
};
export type UpdateExistingConfigConfigsConfigIdPutApiResponse = /** status 200 Successful Response */ any;
export type UpdateExistingConfigConfigsConfigIdPutApiArg = {
    configId: number;
    connectionsTyped: ConnectionsTyped;
};
export type DeleteExistingConfigConfigsConfigIdDeleteApiResponse = /** status 200 Successful Response */ any;
export type DeleteExistingConfigConfigsConfigIdDeleteApiArg = {
    configId: number;
};
export type GetConfigConnectionsConfigsConfigIdConnectionsGetApiResponse =
    /** status 200 Successful Response */ ConnectionsTyped;
export type GetConfigConnectionsConfigsConfigIdConnectionsGetApiArg = {
    configId: number;
};
export type CreateNewConnectionConfigsConfigIdConnectionsPostApiResponse =
    /** status 200 Successful Response */ Connection2;
export type CreateNewConnectionConfigsConfigIdConnectionsPostApiArg = {
    configId: number;
    srcConfigurationModelsConnectionCreate: ConnectionCreate2;
};
export type GetConfigCalsConfigsConfigIdCalsGetApiResponse = /** status 200 Successful Response */ Connections[];
export type GetConfigCalsConfigsConfigIdCalsGetApiArg = {
    configId: number;
};
export type GetConfigUpconvConfigsConfigIdUpconvertersGetApiResponse =
    /** status 200 Successful Response */ Connections[];
export type GetConfigUpconvConfigsConfigIdUpconvertersGetApiArg = {
    configId: number;
};
export type GetAttemptsAttemptsGetApiResponse = /** status 200 Successful Response */ Attempt[];
export type GetAttemptsAttemptsGetApiArg = {
    skip?: number;
    limit?: number;
};
export type CreateNewAttemptAttemptsPostApiResponse = /** status 200 Successful Response */ Attempt;
export type CreateNewAttemptAttemptsPostApiArg = {
    attemptRelatedCreate: AttemptRelatedCreate;
};
export type GetLastAttemptAttemptsLastGetApiResponse = /** status 200 Successful Response */ AttemptRelated;
export type GetLastAttemptAttemptsLastGetApiArg = void;
export type GetLastSuccessAttemptAttemptsLastSuccessGetApiResponse =
    /** status 200 Successful Response */ AttemptRelated;
export type GetLastSuccessAttemptAttemptsLastSuccessGetApiArg = void;
export type UpdateExistingAttemptAttemptsAttemptIdPutApiResponse = /** status 200 Successful Response */ Attempt;
export type UpdateExistingAttemptAttemptsAttemptIdPutApiArg = {
    attemptId: number;
    attemptCreate: AttemptCreate;
};
export type DeleteExistingAttemptAttemptsAttemptIdDeleteApiResponse = /** status 200 Successful Response */ any;
export type DeleteExistingAttemptAttemptsAttemptIdDeleteApiArg = {
    attemptId: number;
};
export type Port = {
    id: number;
    name: string;
};
export type ValidationError = {
    loc: (string | number)[];
    msg: string;
    type: string;
};
export type HttpValidationError = {
    detail?: ValidationError[];
};
export type Speed = {
    id: number;
    value: number;
};
export type DeviceType = {
    id: number;
    name: string;
};
export type DeviceModel = {
    id: number;
    name: string;
};
export type DeviceState = {
    id: number;
    name: string;
};
export type DeviceAdditionalState = {
    id: number;
    name: string;
};
export type DeviceChannel = {
    id: number;
    name: string;
};
export type Device = {
    name: string;
    type_id: number;
    model_id?: number;
    state_id?: number;
    additional_state_id?: number;
    id: number;
    serial_number: number;
};
export type DeviceRelated = {
    name: string;
    type_name: string;
    model_name?: string;
    state_name?: string;
    additional_state_name?: string;
    id: number;
    serial_number: number;
};
export type DeviceRelatedCreate = {
    name: string;
    type_name: string;
    model_name?: string;
    state_name?: string;
    additional_state_name?: string;
};
export type Connection = {
    id: number;
    configuration_id: number;
    device_id: number;
    connected_to_device_id?: number;
    connected_to_device_channel_id: number;
};
export type ConnectionCreate = {
    device_id: number;
    connected_to_device_id?: number;
    connected_to_device_channel_id?: number;
};
export type Configuration = {
    name: string;
    id: number;
};
export type ConfigurationCreate = {
    name: string;
};
export type Connections = {
    id: number;
    device_id: number;
    device_name: string;
    model_name?: string;
    state_name?: string;
    connected_to_device_id?: number;
    connected_to_device?: string;
    connected_to_device_channel_id?: number;
    connected_to_device_channel?: string;
};
export type ConnectionsTyped = {
    config_cals: Connections[];
    config_upconv: Connections[];
};
export type Connection2 = {
    id: number;
    configuration_id: number;
    device_id: number;
    connected_to_device_id?: number;
    connected_to_device_channel_id: number;
};
export type ConnectionCreate2 = {
    device_id: number;
    connected_to_device_id?: number;
    connected_to_device_channel_id?: number;
};
export type Attempt = {
    configuration_id: number;
    speed_id: number;
    port_id: number;
    id: number;
    success: boolean;
    timestamp: string;
};
export type AttemptRelatedCreate = {
    configuration_id: number;
    speed: number;
    port: string;
};
export type AttemptRelated = {
    configuration_id: number;
    speed: number;
    port: string;
    configuration: string;
    success: boolean;
};
export type AttemptCreate = {
    configuration_id: number;
    speed_id: number;
    port_id: number;
};
export const {
    useGetPortsPortsGetQuery,
    useGetSpeedsSpeedsGetQuery,
    useGetDeviceTypesDevicesTypesGetQuery,
    useGetDeviceModelsDevicesModelsGetQuery,
    useGetDeviceStatesDevicesStatesGetQuery,
    useGetDeviceAdditionalStatesDevicesAdditionalStatesGetQuery,
    useGetDeviceChannelsDevicesChannelsGetQuery,
    useGetDevicesByTypeDevicesByTypeGetQuery,
    useGetDevicesByTypesDevicesByTypesGetQuery,
    useGetDevicesByTypesRelatedDevicesByTypesRelatedGetQuery,
    useGetDeviceDevicesDeviceIdGetQuery,
    useUpdateExistingDeviceDevicesDeviceIdPutMutation,
    useDeleteExistingDeviceDevicesDeviceIdDeleteMutation,
    useCreateNewDeviceDevicesPostMutation,
    useUpdateExistingConnectionConnectionsConnectionsConnectionIdPutMutation,
    useDeleteExistingConnectionConnectionsConnectionsConnectionIdDeleteMutation,
    useGetConfigsConfigsGetQuery,
    useCreateNewConfigConfigsPostMutation,
    useGetConfigConfigsConfigIdGetQuery,
    useUpdateExistingConfigConfigsConfigIdPutMutation,
    useDeleteExistingConfigConfigsConfigIdDeleteMutation,
    useGetConfigConnectionsConfigsConfigIdConnectionsGetQuery,
    useCreateNewConnectionConfigsConfigIdConnectionsPostMutation,
    useGetConfigCalsConfigsConfigIdCalsGetQuery,
    useGetConfigUpconvConfigsConfigIdUpconvertersGetQuery,
    useGetAttemptsAttemptsGetQuery,
    useCreateNewAttemptAttemptsPostMutation,
    useGetLastAttemptAttemptsLastGetQuery,
    useGetLastSuccessAttemptAttemptsLastSuccessGetQuery,
    useUpdateExistingAttemptAttemptsAttemptIdPutMutation,
    useDeleteExistingAttemptAttemptsAttemptIdDeleteMutation,
} = injectedRtkApi;
