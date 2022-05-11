# Generate typings for messages.proto
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=. ./src/protos/messages.proto