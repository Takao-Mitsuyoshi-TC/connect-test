<template>
    <section>
        <dl>
            <dt>
                <label for="category">カテゴリ&nbsp;</label>
            </dt>
            <dd>
                <dropdownSelectCategory/>
            </dd>
            <dt>
                <label for="title">タイトル&nbsp;</label>
            </dt>
            <dd>
                <input type="text" id="title" required>
            </dd>
            <dt>
                <label for="thumbnail">サムネイル&nbsp;</label>
            </dt>
            <dd>
                <input type="file" id="thumbnail" name="ファイル選択">
            </dd>
            <dt>
                <label for="file">ファイル&nbsp;</label>
            </dt>
            <dd>
                <input type="file" id="file" name="ファイル選択">
            </dd>

            <dt>
                <label for="productCategory">Product Category&nbsp;</label>
            </dt>
            <dd>
                <dropdownSelectMaster v-bind:cvtable_id="1"/>
            </dd>

        </dl>
        
    </section>
</template>