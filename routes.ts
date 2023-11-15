/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse, fetchMiddlewares } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ProfileController } from './src/controller/profile.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StockController } from './src/controller/stock.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './src/controller/user.controller';
import { expressAuthentication } from './src/middleware/authentication.middleware';
// @ts-ignore - no great way to install types from subpackage
const promiseAny = require('promise.any');
import type { RequestHandler, Router } from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "FlattenMaps_T_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Document_any.any.any_": {
        "dataType": "refAlias",
        "type": {"ref":"FlattenMaps_T_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OId": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{"minLength":{"errorMsg":"Invalid id","value":24},"maxLength":{"errorMsg":"Invalid id","value":24},"pattern":{"errorMsg":"Invalid id","value":"[a-f][0-9]"}}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IProfile": {
        "dataType": "refObject",
        "properties": {
            "_id": {"ref":"OId","required":true},
            "customerGroupID": {"ref":"OId","required":true},
            "type": {"ref":"OId","required":true},
            "name": {"dataType":"string","required":true},
            "officialName": {"dataType":"string","required":true},
            "taxNumber": {"dataType":"double","required":true},
            "taxOffice": {"dataType":"string","required":true},
            "addressCountry": {"dataType":"string","required":true},
            "addressCity": {"dataType":"string","required":true},
            "addressDistrict": {"dataType":"string","required":true},
            "address": {"dataType":"string","required":true},
            "contactName": {"dataType":"string","required":true},
            "contactPhone": {"dataType":"string","required":true},
            "contactEmail": {"dataType":"string","required":true},
            "createdAt": {"dataType":"any","required":true},
            "updatedAt": {"dataType":"any","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ObjectId": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProfilePostParams": {
        "dataType": "refObject",
        "properties": {
            "customerGroupID": {"ref":"OId","required":true},
            "type": {"ref":"OId","required":true},
            "name": {"dataType":"string","required":true},
            "officialName": {"dataType":"string","required":true},
            "taxNumber": {"dataType":"double","required":true},
            "taxOffice": {"dataType":"string","required":true},
            "addressCountry": {"dataType":"string","required":true},
            "addressCity": {"dataType":"string","required":true},
            "addressDistrict": {"dataType":"string","required":true},
            "address": {"dataType":"string","required":true},
            "contactName": {"dataType":"string","required":true},
            "contactPhone": {"dataType":"string","required":true},
            "contactEmail": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IGeneralStock": {
        "dataType": "refObject",
        "properties": {
            "_id": {"ref":"OId"},
            "companyProfileID": {"ref":"OId","required":true},
            "stockName": {"dataType":"string","required":true},
            "stockNameEN": {"dataType":"string","required":true},
            "stockCode": {"dataType":"string","required":true},
            "stockType": {"dataType":"string","required":true},
            "recordDate": {"dataType":"string","required":true},
            "isMainStock": {"dataType":"boolean","required":true},
            "status": {"dataType":"string","required":true},
            "marks": {"dataType":"string","required":true},
            "model": {"dataType":"string","required":true},
            "generalBarcode": {"dataType":"string","required":true},
            "stockUnit": {"dataType":"string","required":true},
            "stockCount": {"dataType":"double","required":true},
            "shelfNo": {"dataType":"string","required":true},
            "shelfFloorNo": {"dataType":"string","required":true},
            "specialCode": {"dataType":"string","required":true},
            "category": {"dataType":"string","required":true},
            "subCategory": {"dataType":"string","required":true},
            "subSubCategory": {"dataType":"string","required":true},
            "descriptions": {"dataType":"string","required":true},
            "producerCode": {"dataType":"string","required":true},
            "sutCode": {"dataType":"string","required":true},
            "producerName": {"dataType":"string","required":true},
            "producerAddress": {"dataType":"string","required":true},
            "leadTime": {"dataType":"string","required":true},
            "weightKg": {"dataType":"double","required":true},
            "weight": {"dataType":"string","required":true},
            "costPrice": {"dataType":"double","required":true},
            "outsourcingPrice": {"dataType":"double","required":true},
            "outsourcing": {"dataType":"boolean","required":true},
            "utsRecord": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Required_any_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IStockInOut": {
        "dataType": "refObject",
        "properties": {
            "_id": {"ref":"OId","required":true},
            "stockID": {"ref":"OId","required":true},
            "type": {"dataType":"string","required":true},
            "billingNumber": {"dataType":"string","required":true},
            "billingDate": {"dataType":"string","required":true},
            "supplierGroupID": {"ref":"OId","required":true},
            "customerGroupID": {"ref":"OId","required":true},
            "recordDate": {"dataType":"string","required":true},
            "unit": {"dataType":"string","required":true},
            "count": {"dataType":"double","required":true},
            "currency": {"dataType":"string","required":true},
            "purchasePrice": {"dataType":"double","required":true},
            "unitPrice": {"dataType":"double","required":true},
            "costPrice": {"dataType":"double","required":true},
            "salesPrice": {"dataType":"double","required":true},
            "barcode": {"dataType":"string","required":true},
            "leadTime": {"dataType":"string","required":true},
            "billingPDFLink": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "addGeneralStockParams": {
        "dataType": "refObject",
        "properties": {
            "companyProfileID": {"ref":"OId","required":true},
            "stockName": {"dataType":"string","required":true},
            "stockNameEN": {"dataType":"string","required":true},
            "stockCode": {"dataType":"string","required":true},
            "stockType": {"dataType":"string","required":true},
            "recordDate": {"dataType":"string","required":true},
            "isMainStock": {"dataType":"boolean","required":true},
            "status": {"dataType":"string","required":true},
            "marks": {"dataType":"string","required":true},
            "model": {"dataType":"string","required":true},
            "generalBarcode": {"dataType":"string","required":true},
            "stockUnit": {"dataType":"string","required":true},
            "stockCount": {"dataType":"double","required":true},
            "shelfNo": {"dataType":"string","required":true},
            "shelfFloorNo": {"dataType":"string","required":true},
            "specialCode": {"dataType":"string","required":true},
            "category": {"dataType":"string","required":true},
            "subCategory": {"dataType":"string","required":true},
            "subSubCategory": {"dataType":"string","required":true},
            "descriptions": {"dataType":"string","required":true},
            "producerCode": {"dataType":"string","required":true},
            "sutCode": {"dataType":"string","required":true},
            "producerName": {"dataType":"string","required":true},
            "producerAddress": {"dataType":"string","required":true},
            "leadTime": {"dataType":"string","required":true},
            "weightKg": {"dataType":"double","required":true},
            "weight": {"dataType":"string","required":true},
            "costPrice": {"dataType":"double","required":true},
            "outsourcingPrice": {"dataType":"double","required":true},
            "outsourcing": {"dataType":"boolean","required":true},
            "utsRecord": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "User": {
        "dataType": "refObject",
        "properties": {
            "_id": {"ref":"OId","required":true},
            "role": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["admin"]},{"dataType":"enum","enums":["user"]}],"required":true},
            "name": {"dataType":"string","required":true},
            "surname": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
            "createdAt": {"dataType":"any","required":true},
            "updatedAt": {"dataType":"any","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserSendParams": {
        "dataType": "refObject",
        "properties": {
            "_id": {"ref":"OId","required":true},
            "name": {"dataType":"string","required":true},
            "surname": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserPostParams": {
        "dataType": "refObject",
        "properties": {
            "role": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["admin"]},{"dataType":"enum","enums":["user"]}],"required":true},
            "name": {"dataType":"string","required":true},
            "surname": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserUpdateParams": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "surname": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.get('/profile/get-all',
            ...(fetchMiddlewares<RequestHandler>(ProfileController)),
            ...(fetchMiddlewares<RequestHandler>(ProfileController.prototype.getAllProfile)),

            function ProfileController_getAllProfile(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProfileController();


              const promise = controller.getAllProfile.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/profile/:id',
            ...(fetchMiddlewares<RequestHandler>(ProfileController)),
            ...(fetchMiddlewares<RequestHandler>(ProfileController.prototype.getUserById)),

            function ProfileController_getUserById(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"ref":"OId"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProfileController();


              const promise = controller.getUserById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/profile',
            ...(fetchMiddlewares<RequestHandler>(ProfileController)),
            ...(fetchMiddlewares<RequestHandler>(ProfileController.prototype.addProfile)),

            function ProfileController_addProfile(request: any, response: any, next: any) {
            const args = {
                    Body: {"in":"body","name":"Body","required":true,"ref":"ProfilePostParams"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new ProfileController();


              const promise = controller.addProfile.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/stock/get-all',
            ...(fetchMiddlewares<RequestHandler>(StockController)),
            ...(fetchMiddlewares<RequestHandler>(StockController.prototype.getAllStock)),

            function StockController_getAllStock(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new StockController();


              const promise = controller.getAllStock.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/stock/get-all-stockInOut',
            ...(fetchMiddlewares<RequestHandler>(StockController)),
            ...(fetchMiddlewares<RequestHandler>(StockController.prototype.getAllStockInOut)),

            function StockController_getAllStockInOut(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new StockController();


              const promise = controller.getAllStockInOut.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/stock',
            ...(fetchMiddlewares<RequestHandler>(StockController)),
            ...(fetchMiddlewares<RequestHandler>(StockController.prototype.addGeneralStock)),

            function StockController_addGeneralStock(request: any, response: any, next: any) {
            const args = {
                    body: {"in":"body","name":"body","required":true,"ref":"addGeneralStockParams"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new StockController();


              const promise = controller.addGeneralStock.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/users/get-all',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.getAllUsers)),

            function UserController_getAllUsers(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


              const promise = controller.getAllUsers.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/users/:id',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.getUserById)),

            function UserController_getUserById(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"ref":"OId"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


              const promise = controller.getUserById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/users',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.addUser)),

            function UserController_addUser(request: any, response: any, next: any) {
            const args = {
                    body: {"in":"body","name":"body","required":true,"ref":"UserPostParams"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


              const promise = controller.addUser.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.patch('/users/:id',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.updateUserById)),

            function UserController_updateUserById(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"ref":"OId"},
                    body: {"in":"body","name":"body","required":true,"ref":"UserUpdateParams"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


              const promise = controller.updateUserById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/users/:id',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.deleteUserById)),

            function UserController_deleteUserById(request: any, response: any, next: any) {
            const args = {
                    id: {"in":"path","name":"id","required":true,"ref":"OId"},
                    body: {"in":"body","name":"body","required":true,"ref":"UserUpdateParams"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new UserController();


              const promise = controller.deleteUserById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, successStatus: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode = successStatus;
                let headers;
                if (isController(controllerObj)) {
                    headers = controllerObj.getHeaders();
                    statusCode = controllerObj.getStatus() || statusCode;
                }

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                returnHandler(response, statusCode, data, headers)
            })
            .catch((error: any) => next(error));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(response: any, statusCode?: number, data?: any, headers: any = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            response.status(statusCode || 200)
            data.pipe(response);
        } else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        } else {
            response.status(statusCode || 204).end();
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(response: any): TsoaResponse<HttpStatusCodeLiteral, unknown>  {
        return function(status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any, response: any): any[] {
        const fieldErrors: FieldErrors  = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'queries':
                    return validationService.ValidateParam(args[key], request.query, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    }
                case 'res':
                    return responder(response);
            }
        });

        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
