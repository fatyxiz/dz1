const SUPABASE_URL = 'https://yuixifwjmjvuqvhkmxic.supabase.co';
const SUPABASE_KEY = 'sb_publishable_g7l2MjuOPzNsxTn_WtfJOg_fSVMVQvW';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('surveyForm');
    const result = document.getElementById('result');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const catType = document.getElementById('catType').value.trim();
        const petInfo = document.getElementById('petInfo').value.trim();
        const likedEl = document.querySelector('input[name="liked_site"]:checked');

        if (!catType || !petInfo) {
            result.textContent = 'Заполните все текстовые поля.';
            return;
        }
        if (!likedEl) {
            result.textContent = 'Ответьте, понравился ли вам сайт.';
            return;
        }

        const { error } = await supabase
            .from('responses')
            .insert([{
                cat_type: catType,
                pet_info: petInfo,
                liked_site: parseInt(likedEl.value, 10)
            }]);

        if (error) {
            result.textContent = 'Ошибка: ' + error.message;
        } else {
            result.textContent = 'Спасибо! Ответы сохранены.';
            form.reset();
        }
    });
});