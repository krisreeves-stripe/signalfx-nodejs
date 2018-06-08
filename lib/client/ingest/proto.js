'use strict';
// Copyright (C) 2015 SignalFx, Inc. All rights reserved.

var protocolBuffers;
var protocolBufferEnabled = false;
try {
  protocolBuffers = require('../../proto/signal_fx_protocol_buffers_pb2').com.signalfx.metrics.protobuf;
  protocolBufferEnabled = true;
} catch (error) {
  console.warn('Protocol Buffers not installed properly. ', error);
  protocolBufferEnabled = false;
}

exports.protocolBufferEnabled = protocolBufferEnabled;
exports.protocolBuffers = protocolBuffers;
