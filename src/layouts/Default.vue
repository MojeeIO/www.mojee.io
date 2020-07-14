<template>
    <div class="px-6 text-base antialiased text-gray-700 bg-white font-body">
        <header class="flex items-center h-16">
            <strong>
                <g-link to="/">{{ $static.metadata.siteName }}</g-link>
            </strong>
            <nav class="ml-auto">
                <g-link class="ml-4" to="/">Home</g-link>
                <g-link class="ml-4" to="/about/">About</g-link>
            </nav>
        </header>
        <slot />
    </div>
</template>

<static-query>
query {
    metadata {
        siteName
    }
}
</static-query>
