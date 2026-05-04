        largeShieldProjector = new BaseShield("护盾"){{
            requirements(Category.effect, BuildVisibility.editorOnly, with());

            size = 4;
            radius = 400f;

            consumePower(5f);
        }};