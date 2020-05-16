import * as Crypto from 'expo-crypto';

function crypto(text) {
    return (Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        text)
    );
}

export default crypto;