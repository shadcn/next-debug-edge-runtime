# next-debug-edge-runtimg

This repo is a reproduction for debugging the `experimental-edge` runtime inside layout groups.

## Links

1. ✅ `experimental-edge` runtime works for **root page**: https://next-debug-edge-runtime.vercel.app
2. ✅ `experimental-edge` runtime works for a **nested page with layout**: https://next-debug-edge-runtime.vercel.app/nested-with-layout
3. ✅ `experimental-edge` runtime works for a **nested page without layout**: https://next-debug-edge-runtime.vercel.app/nested-no-layout
4. ❌ `experimental-edge` runtime does not work for a **grouped page with layout**: https://next-debug-edge-runtime.vercel.app/group-no-layout
5. ❌ `experimental-edge` runtime does not work for a **grouped page without layout**: https://next-debug-edge-runtime.vercel.app/group-with-layout

Conclusion: Any page using `experimental-edge` runtime inside a route group fails with a 500 `ReferenceError: self is not defined`
