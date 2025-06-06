"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const messageSchema = new mongoose_1.default.Schema({
    content: {
        type: String,
        required: true
    },
    senderId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiverId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    senderFirstName: {
        type: String,
        required: true
    },
    senderLastName: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports.Message = mongoose_1.default.model('Message', messageSchema);
