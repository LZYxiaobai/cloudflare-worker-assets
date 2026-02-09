export default () => {
    const n = crypto.getRandomValues(new Uint8Array(1))[0] % 16;
    const url = `/static/komari-bg/${n}.webp`;

    return new Response('', { status: 302, headers: { Location: url } });
}