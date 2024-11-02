<script src="https://js.stripe.com/v3/"></script>
<script>
    var stripe = Stripe('your_stripe_publishable_key');

    window.redirectToCheckout = function (sessionId) {
        stripe.redirectToCheckout({ sessionId: sessionId });
    };
</script>
