import * as grpc from '@grpc/grpc-js';
import { UntypedHandleCall, UntypedServiceImplementation } from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
// console.log(
//   '🚀 ~ file: index.ts ~ line 3 ~ UntypedHandleCall, UntypedServiceImplementation',
//   UntypedHandleCall,
//   UntypedServiceImplementation
// );

import { defineProto } from './protos/defineProto';
import { serviceImplementations } from './implementations/grpc.implementations';

const startGrpcServer = (service: any) => {
  const server = new grpc.Server();
  server.addService(service.UserService.service, {});
};

async function bootstrap() {
  try {
    const proto = defineProto();
    console.log('🚀 ~ file: index.ts ~ line 21 ~ helloProto', proto.test);
  } catch (error) {
    console.log('ERROR:', error);
  }
}
bootstrap();
